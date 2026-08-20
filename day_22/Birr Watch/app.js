const API = "https://open.er-api.com/v6/latest/ETB";

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

function render() {
  const codes = Object.keys(state.rates).sort();

  currencySelect.innerHTML = codes
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");

  if (!codes.includes(state.currency)) {
    state.currency = codes.includes("USD") ? "USD" : codes[0];
  }
  currencySelect.value = state.currency;
  amountInput.value = state.amount;

  renderRatesTable(codes);
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
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  doConvert(true);
});

currencySelect.addEventListener("change", () => {
  doConvert(false);
});

retryBtn.addEventListener("click", loadRates);

loadRates();
