# Movie Watchlist

A single-page movie watchlist app. Browse a movie catalog, search/filter by title,
add movies to a personal watchlist, see the total watch time, and save/share the
list via a validated form. The watchlist persists across reloads.

## Demo

🎥 Loom Video: [Watch Project Demo](https://www.loom.com/share/fa1f8be7e5504bfc9f2d7bdf0af059bb)

🌐 Live Application: [View Live App](https://dkidus-star.github.io/movie-watch-list/)

## Data source

Movie data is stored locally in `data/movies.json`. Poster images are stored
locally in `images/`.

## How to run

1. Clone this repository.
2. Open the folder in a code editor (e.g. VS Code).
3. Serve it with a local server — for example, the "Live Server" VS Code extension.
   Opening `index.html` directly (file://) will block the `fetch()` call.
4. Visit the local address your server gives you (e.g. http://127.0.0.1:5500).

## Features

- Semantic, responsive HTML/CSS (mobile and desktop)
- Movies loaded from JSON with loading and error states
- Live search/filter
- Add/remove movies from a watchlist via delegated click events
- Computed total watch time (`reduce`)
- Watchlist persisted via `localStorage`
- "Save & Share Watchlist" form with client-side validation and a confirmation message
