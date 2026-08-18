const form = document.querySelector("#country-form");
const input = document.querySelector("#country-input");
const out = document.querySelector("#facts");

function render(out, label, value) {
  const fact = document.createElement("div");
  fact.className = "fact";

  const title = document.createElement("strong");
  title.textContent = label;

  const result = document.createElement("span");
  result.textContent = value;

  fact.appendChild(title);
  fact.appendChild(result);

  out.appendChild(fact);
}

async function showCountry(name) {
  out.textContent = "Loading...";

  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`,
    );

    if (!res.ok) {
      throw new Error("Country not found");
    }

    const [country] = await res.json();

    out.innerHTML = "";

    const card = document.createElement("div");
    card.className = "country-card";

    const title = document.createElement("h2");
    title.textContent = country.name.common;

    const flag = document.createElement("img");
    flag.src = country.flags.svg;
    flag.alt = `Flag of ${country.name.common}`;

    card.appendChild(title);
    card.appendChild(flag);
    out.appendChild(card);

    render(out, "Capital", country.capital?.[0] || "N/A");
    render(out, "Population", country.population.toLocaleString());
    render(out, "Region", country.region);

    const currencies = country.currencies
      ? Object.values(country.currencies)
          .map((currency) => `${currency.name} (${currency.symbol || ""})`)
          .join(", ")
      : "N/A";

    render(out, "Currencies", currencies);
  } catch (err) {
    out.textContent = err.message || "Something went wrong. Please try again.";
    out.className = "error";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const countryName = input.value.trim();

  if (countryName) {
    showCountry(countryName);
  }
});

// Default country on first load
showCountry("ethiopia");
