async function getUSDtoETB() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const rate = data.rates.ETB;

    if (!rate) {
      throw new Error("ETB rate not found in response");
    }

    return rate;
  } catch (error) {
    console.error("Error fetching rate:", error);
    throw error;
  }
}

async function getRate() {
  try {
    const rate = await getUSDtoETB();
    document.getElementById("result").textContent = `1 USD = ${rate} ETB`;
  } catch (error) {
    document.getElementById("result").textContent = "Error: " + error.message;
  }
}
