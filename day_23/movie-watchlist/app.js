const DATA_URL = "data/movies.json";
const STORAGE_KEY = "movieWatchlist";
const POSTER_FALLBACK = "images/placeholder.jpg";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const moviesEl = document.querySelector("#movies");
const watchlistEl = document.querySelector("#watchlist-body");
const searchEl = document.querySelector("#search");
const saveForm = document.querySelector("#save-form");
const nameEl = document.querySelector("#save-name");
const emailEl = document.querySelector("#save-email");
const errEl = document.querySelector("#form-error");

const state = {
  movies: [],
  watchlist: [],
  search: "",
};

// load movies
async function loadMovies() {
  moviesEl.textContent = "Loading movies…";
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    state.movies = await res.json();
    render();
  } catch (err) {
    moviesEl.textContent = "Could not load movies.";
  }
}

//  render main movie grid
function filterMovies(term) {
  const t = term.toLowerCase();
  return state.movies.filter((m) => m.title.toLowerCase().includes(t));
}

function movieCardHTML(m) {
  return `
    <article class="movie" data-id="${m.id}">
      <img class="poster" src="images/${m.poster}" alt="${m.title} poster"
           onerror="this.src='${POSTER_FALLBACK}'" />
      <div class="movie-body">
        <h3>${m.title}</h3>
        <p class="meta">${m.genre} · ${m.year}</p>
        <p class="runtime">${m.runtime} min</p>
        <button class="add">Add to Watchlist</button>
      </div>
    </article>`;
}

function renderMovies() {
  const shown = filterMovies(state.search);
  moviesEl.innerHTML = shown.length
    ? shown.map(movieCardHTML).join("")
    : `<p>No movies found.</p>`;
}

function render() {
  renderMovies();
  renderWatchlist();
}

// render: watchlist panel
function watchTotal() {
  return state.watchlist.reduce((sum, m) => sum + m.runtime, 0);
}

function watchlistItemHTML(m) {
  return `
    <li data-id="${m.id}">
      <span>${m.title}</span>
      <span>${m.runtime} min</span>
      <button class="rm" aria-label="Remove ${m.title}">✕</button>
    </li>`;
}

function renderWatchlist() {
  if (state.watchlist.length === 0) {
    watchlistEl.innerHTML = `<p>No movies added yet.</p>`;
    return; // guard clause  nothing more to draw
  }

  watchlistEl.innerHTML = `
    <ul class="watchlist-items">
      ${state.watchlist.map(watchlistItemHTML).join("")}
    </ul>
    <p class="total">Total watch time: ${watchTotal()} min</p>
  `;
}

// add a movie delegated on the movie grid
moviesEl.addEventListener("click", (e) => {
  if (!e.target.matches(".add")) return;

  const id = Number(e.target.closest(".movie").dataset.id);
  const movie = state.movies.find((m) => m.id === id);
  if (!movie) return; // guard clause — bad id, nothing to add

  const alreadyAdded = state.watchlist.some((m) => m.id === id);
  if (alreadyAdded) return; // one movie, once — no quantity needed

  state.watchlist.push({
    id: movie.id,
    title: movie.title,
    runtime: movie.runtime,
  });
  save();
  render();
});

// remove a movie  delegated on the watchlist panel
watchlistEl.addEventListener("click", (e) => {
  if (!e.target.matches(".rm")) return;
  const id = Number(e.target.closest("li").dataset.id);
  state.watchlist = state.watchlist.filter((m) => m.id !== id);
  save();
  render();
});

// live search
searchEl.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

// persistence
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.watchlist));
}

function load() {
  const s = localStorage.getItem(STORAGE_KEY);
  if (s) state.watchlist = JSON.parse(s);
}

// save & share form
function validate({ name, email }) {
  if (!name.trim()) return "Please enter your name.";
  if (!EMAIL.test(email)) return "Enter a valid email address.";
  if (state.watchlist.length === 0) return "Your watchlist is empty.";
  return ""; // no error
}

function showConfirmation(record) {
  errEl.className = "success";
  const count = record.movies.length;
  errEl.textContent =
    `Saved! We'll send ${count} movie${count === 1 ? "" : "s"} ` +
    `(${record.totalRuntime} min total) to ${record.email}.`;
}

function saveWatchlist(data) {
  const record = {
    ...data,
    movies: state.watchlist,
    totalRuntime: watchTotal(),
    savedAt: new Date().toISOString(),
  };
  console.log("Watchlist saved:", record);
  showConfirmation(record);
  saveForm.reset();
}

saveForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = { name: nameEl.value, email: emailEl.value };
  const msg = validate(data);

  errEl.className = "error";
  errEl.textContent = msg;
  if (msg) return; // stop on error

  saveWatchlist(data);
});

//  one entry point  restore saved watchlist, then load movies and render
async function init() {
  load();
  await loadMovies();
}

init();
