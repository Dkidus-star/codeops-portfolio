async function fetchUserDetails() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Loading...";

  try {
    // First fetch the list of users
    const listResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    );

    if (!listResponse.ok) {
      throw new Error(`Failed to fetch user list: ${listResponse.status}`);
    }

    const users = await listResponse.json();

    // Take first two users
    const firstTwo = users.slice(0, 2);

    // Fetch details for both in parallel using Promise.all
    const detailsPromises = firstTwo.map((user) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`).then(
        (res) => {
          if (!res.ok) throw new Error(`Failed to fetch user ${user.id}`);
          return res.json();
        },
      ),
    );

    const details = await Promise.all(detailsPromises);

    // Display results
    resultDiv.innerHTML = "";
    details.forEach((user, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
                <h3>User ${index + 1}</h3>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <hr>
            `;
      resultDiv.appendChild(div);
    });
  } catch (error) {
    resultDiv.textContent = "Error: " + error.message;
    console.error("Error:", error);
  }
}
