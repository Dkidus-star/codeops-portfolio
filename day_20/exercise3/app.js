// 1. Deliberately wrong URL - catch block runs
async function testWrongUrl() {
  try {
    const response = await fetch("https://thisurldoesnotexist12345.com/data");
    // This won't execute because fetch throws a network error
    const data = await response.json();
    document.getElementById("result").textContent =
      "Success: " + JSON.stringify(data);
  } catch (error) {
    document.getElementById("result").textContent =
      "Catch block ran! Error: " + error.message;
    console.log("Network error caught:", error);
  }
}

// 2. Real URL that returns 404
async function test404Url() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/99999",
    );

    // Without res.ok check, this would try to parse 404 page as JSON
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - The resource was not found`,
      );
    }

    const data = await response.json();
    document.getElementById("result").textContent =
      "Success: " + JSON.stringify(data);
  } catch (error) {
    document.getElementById("result").textContent = "Error: " + error.message;
    console.log("Error caught:", error);
  }
}

// Explanation of why res.ok is needed:
// When we fetch a URL that returns 404, fetch() does NOT throw an error - it resolves successfully.
// Without checking res.ok, our code would try to parse the 404 HTML response as JSON,
// causing a parsing error that may be harder to debug. The res.ok check ensures we handle
// HTTP error status codes properly.
