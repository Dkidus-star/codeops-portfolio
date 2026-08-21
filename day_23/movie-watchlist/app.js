const moviesEl = document.querySelector("#movies");
const watchlistEl = document.querySelector("#watchlist-body");
const searchEl = document.querySelector("#search");

const state = {
  movies: [], // loaded from JSON
  watchlist: [], // { id, title, runtime }
  search: "", // current filter text
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
  const shown = state.movies.filter((m) =>
    m.title.toLowerCase().includes(term),
  );

  moviesEl.innerHTML = shown.length
    ? shown
        .map(
          (m) => `
      <article class="movie" data-id="${m.id}">
        <img class="poster" src="images/${m.poster}" alt="${m.title} poster"
             onerror="this.src='images/placeholder.jpg'" />
        <div class="movie-body">
          <h3>${m.title}</h3>
          <p class="meta">${m.genre} · ${m.year}</p>
          <p class="runtime">${m.runtime} min</p>
          <button class="add">Add to Watchlist</button>
        </div>
      </article>`,
        )
        .join("")
    : `<p>No movies found.</p>`;

  renderWatchlist();
}

function watchTotal() {
  return state.watchlist.reduce((sum, m) => sum + m.runtime, 0);
}

function renderWatchlist() {
  if (state.watchlist.length === 0) {
    watchlistEl.innerHTML = `<p>No movies added yet.</p>`;
    return;
  }

  watchlistEl.innerHTML = `
    <ul class="watchlist-items">
      ${state.watchlist
        .map(
          (m) => `
        <li data-id="${m.id}">
          <span>${m.title}</span>
          <span>${m.runtime} min</span>
          <button class="rm" aria-label="Remove ${m.title}">✕</button>
        </li>`,
        )
        .join("")}
    </ul>
    <p class="total">Total watch time: ${watchTotal()} min</p>
  `;
}

moviesEl.addEventListener("click", (e) => {
  if (!e.target.matches(".add")) return;
  const id = Number(e.target.closest(".movie").dataset.id);
  const alreadyAdded = state.watchlist.find((m) => m.id === id);
  if (alreadyAdded) return; // one movie, once — no quantity needed
  const movie = state.movies.find((m) => m.id === id);
  state.watchlist.push({
    id: movie.id,
    title: movie.title,
    runtime: movie.runtime,
  });
  save();
  render();
});

watchlistEl.addEventListener("click", (e) => {
  if (!e.target.matches(".rm")) return;
  const id = Number(e.target.closest("li").dataset.id);
  state.watchlist = state.watchlist.filter((m) => m.id !== id);
  save();
  render();
});

searchEl.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

function save() {
  localStorage.setItem("movieWatchlist", JSON.stringify(state.watchlist));
}

function load() {
  const s = localStorage.getItem("movieWatchlist");
  if (s) state.watchlist = JSON.parse(s);
}

async function init() {
  load();
  await loadMovies();
}

init();
