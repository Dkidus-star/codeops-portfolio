// Original .then chain (commented for reference)
/*
function loadPostsThen() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.json();
        })
        .then(data => {
            renderPosts(data);
        })
        .catch(error => {
            document.getElementById('posts').textContent = 'Error: ' + error.message;
        });
}
*/

// Rewritten as async/await
async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    renderPosts(data);
  } catch (error) {
    document.getElementById("posts").textContent = "Error: " + error.message;
  }
}

function renderPosts(posts) {
  const container = document.getElementById("posts");
  container.innerHTML = "";
  posts.slice(0, 5).forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
    container.appendChild(div);
  });
}
