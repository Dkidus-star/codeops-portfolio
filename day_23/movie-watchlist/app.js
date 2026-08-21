
const moviesEl = document.querySelector("#movies");
const watchlistEl = document.querySelector("#watchlist");
const searchEl = document.querySelector("#search");

const state = {
  movies: [],     // loaded from JSON
  watchlist: [],  // { id, title, runtime }
  search: "",     // current filter text
};


async function loadMovies() {
  moviesEl.textContent = "Loading movies…";
  try {
    const res = await fetch("data/movies.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    state.movies = await res.json();
    render();
  } catch (err) {
    moviesEl.textContent = "Could not load movies.";
  }
}

function render() {
  const term = state.search.toLowerCase();
  const shown = state.movies.filter(m =>
    m.title.toLowerCase().includes(term)
  );

  moviesEl.innerHTML = shown.length
    ? shown.map(m => `
      <article class="movie" data-id="${m.id}">
        <img class="poster" src="images/${m.poster}" alt="${m.title} poster"
             onerror="this.src='images/placeholder.jpg'" />
        <div class="movie-body">
          <h3>${m.title}</h3>
          <p class="meta">${m.genre} · ${m.year}</p>
          <p class="runtime">${m.runtime} min</p>
          <button class="add">Add to Watchlist</button>
        </div>
      </article>`).join("")
    : `<p>No movies found.</p>`;

  renderWatchlist();
}


function renderWatchlist() {}

searchEl.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

loadMovies();