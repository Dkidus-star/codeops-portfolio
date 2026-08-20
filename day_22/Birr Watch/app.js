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
};

const statusEl = document.querySelector("#status");
const retryBtn = document.querySelector("#retry");
const currencySelect = document.querySelector("#currency");
const convertBtn = document.querySelector("#convert-btn");
const watchBtn = document.querySelector("#watch");
const ratesBody = document.querySelector("#rates-body");

function formatRate(n) {
  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 4 }).format(
    n,
  );
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

  renderRatesTable(codes);
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

retryBtn.addEventListener("click", loadRates);

loadRates();
