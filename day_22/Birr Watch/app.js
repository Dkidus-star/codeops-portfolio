const API = "https://open.er-api.com/v6/latest/ETB";
const STORAGE_KEY = "birrwatch";

const FEATURED_CODES = [
  "USD",
  "EUR",
  "GBP",
  "KES",
  "DJF",
  "SOS",
  "SAR",
  "AED",
  "CNY",
  "INR",
];

const state = {
  base: "ETB",
  rates: {},
  watchlist: [],
  amount: 100,
  currency: "USD",
};

const statusEl = document.querySelector("#status");
const retryBtn = document.querySelector("#retry");
const form = document.querySelector("#convert-form");
const amountInput = document.querySelector("#amount");
const currencySelect = document.querySelector("#currency");
const convertBtn = document.querySelector("#convert-btn");
const resultEl = document.querySelector("#result");
const ratesBody = document.querySelector("#rates-body");
const watchBtn = document.querySelector("#watch");
const watchLabel = document.querySelector("#watch-currency-label");
const watchlistUl = document.querySelector("#watchlist-list");

// ---------- formatting helpers ----------
function formatRate(n) {
  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 4 }).format(
    n,
  );
}

function formatAmount(n) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(n);
}

function save() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        watchlist: state.watchlist,
        currency: state.currency,
      }),
    );
  } catch (err) {}
}

function load() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed.watchlist)) state.watchlist = parsed.watchlist;
    if (typeof parsed.currency === "string") state.currency = parsed.currency;
  } catch (err) {}
}

async function loadRates() {
  statusEl.textContent = "Loading rates…";
  retryBtn.hidden = true;
  setControlsEnabled(false);

  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (!data.rates) throw new Error("Malformed response");

    state.rates = data.rates;
    statusEl.textContent = "";
    setControlsEnabled(true);
    render();
  } catch (err) {
    statusEl.textContent = "Could not load rates. Check your connection.";
    retryBtn.hidden = false;
  }
}

function setControlsEnabled(enabled) {
  currencySelect.disabled = !enabled;
  convertBtn.disabled = !enabled;
  watchBtn.disabled = !enabled;
}

// ---------- rendering ----------
function render() {
  const codes = Object.keys(state.rates).sort();

  currencySelect.innerHTML = codes
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");

  if (!codes.includes(state.currency)) {
    state.currency = codes.includes("USD") ? "USD" : codes[0];
  }
  currencySelect.value = state.currency;
  watchLabel.textContent = state.currency;

  amountInput.value = state.amount;

  renderRatesTable(codes);
  renderWatchlist();
  updateWatchButtonState();
  doConvert(false);
}

function renderRatesTable(codes) {
  const rows = FEATURED_CODES.filter((c) => codes.includes(c));

  if (rows.length === 0) {
    ratesBody.innerHTML = `<tr class="rates-empty-row"><td colspan="2">No featured currencies available.</td></tr>`;
    return;
  }

  ratesBody.innerHTML = rows
    .map(
      (c) => `
    <tr>
      <td class="code">${c}</td>
      <td class="rate">${formatRate(state.rates[c])}</td>
    </tr>
  `,
    )
    .join("");
}

function renderWatchlist() {
  if (state.watchlist.length === 0) {
    watchlistUl.innerHTML = `<li class="watchlist-empty">No currencies saved yet — add one from the teller window above.</li>`;
    return;
  }

  watchlistUl.innerHTML = state.watchlist
    .map((c) => {
      const rate = state.rates[c];
      const rateText =
        rate !== undefined ? `1 ETB = ${formatRate(rate)} ${c}` : c;
      return `
      <li data-c="${c}">
        <span>${rateText}</span>
        <button type="button" class="rm" aria-label="Remove ${c} from watchlist">×</button>
      </li>
    `;
    })
    .join("");
}

function updateWatchButtonState() {
  const isSaved = state.watchlist.includes(state.currency);
  watchBtn.classList.toggle("added", isSaved);
  watchBtn.textContent = isSaved
    ? `✓ ${state.currency} is saved`
    : `+ Add ${state.currency} to watchlist`;
}

function triggerFlip() {
  resultEl.classList.remove("flip");
  void resultEl.offsetWidth; // force reflow so the animation can replay
  resultEl.classList.add("flip");
}

function doConvert(reportErrors) {
  const amt = Number(amountInput.value);

  if (!amt || amt <= 0 || Number.isNaN(amt)) {
    if (reportErrors) {
      resultEl.textContent = "Enter an amount above zero.";
      resultEl.classList.add("error");
    }
    return;
  }

  const rate = state.rates[currencySelect.value];
  if (rate === undefined) return;

  resultEl.classList.remove("error");
  state.amount = amt;
  state.currency = currencySelect.value;

  const out = amt * rate;
  resultEl.textContent = `${formatAmount(amt)} ETB  =  ${formatAmount(out)} ${state.currency}`;
  triggerFlip();

  watchLabel.textContent = state.currency;
  updateWatchButtonState();
  save();
}

// ---------- events ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  doConvert(true);
});

currencySelect.addEventListener("change", () => {
  doConvert(false);
});

watchBtn.addEventListener("click", () => {
  const c = currencySelect.value;
  if (!c || state.watchlist.includes(c)) return;
  state.watchlist.push(c);
  save();
  renderWatchlist();
  updateWatchButtonState();
});

watchlistUl.addEventListener("click", (e) => {
  if (!e.target.matches(".rm")) return;
  const li = e.target.closest("li");
  const c = li.dataset.c;
  state.watchlist = state.watchlist.filter((x) => x !== c);
  save();
  renderWatchlist();
  updateWatchButtonState();
});

retryBtn.addEventListener("click", loadRates);

async function init() {
  load();
  await loadRates();
}

init();
