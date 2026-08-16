let simulateDelay = false;
let simulateErrorMode = false;

function simulateSlowNetwork() {
  simulateDelay = true;
  simulateErrorMode = false;
  document.getElementById("status").textContent = "⚠️ Slow network simulated";
  document.getElementById("status").className = "";
  document.getElementById("content").innerHTML = "";
}

function simulateError() {
  simulateErrorMode = true;
  simulateDelay = false;
  document.getElementById("status").textContent = "⚠️ Error simulation enabled";
  document.getElementById("status").className = "";
  document.getElementById("content").innerHTML = "";
}

async function fetchData() {
  const statusDiv = document.getElementById("status");
  const contentDiv = document.getElementById("content");

  // State 1: Loading
  statusDiv.textContent = "Loading...";
  statusDiv.className = "loading";
  contentDiv.innerHTML = "⏳ Fetching data...";

  try {
    // Simulate slow network if enabled
    if (simulateDelay) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    // Simulate error if enabled
    if (simulateErrorMode) {
      throw new Error("Network error simulated");
    }

    // Real API call
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // State 2: Success
    statusDiv.textContent = "✅ Data loaded successfully!";
    statusDiv.className = "success";
    contentDiv.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
            <p><small>Post ID: ${data.id} | User ID: ${data.userId}</small></p>
        `;

    // Reset simulation flags after successful fetch
    simulateDelay = false;
    simulateErrorMode = false;
  } catch (error) {
    // State 3: Error
    statusDiv.textContent = "❌ Error loading data";
    statusDiv.className = "error";
    contentDiv.innerHTML = `
            <p><strong>Error:</strong> ${error.message}</p>
            <p>Tips:</p>
            <ul>
                <li>Check your internet connection</li>
                <li>Try clicking "Fetch Data" again</li>
                <li>Use "Simulate Slow Network" to test loading state</li>
                <li>Use "Simulate Error" to test error state</li>
            </ul>
        `;

    console.error("Fetch error:", error);
  }
}

// Auto-fetch on page load
window.addEventListener("load", () => {
  fetchData();
});
