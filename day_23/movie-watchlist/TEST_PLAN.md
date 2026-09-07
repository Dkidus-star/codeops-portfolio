# Test Plan — Movie Watchlist

- [ ] Add a movie, then add the same movie again -> not duplicated in watchlist
- [ ] Remove a movie from the watchlist -> total updates
- [ ] Search for a movie that doesn't exist -> "No movies found." shown, not a blank grid
- [ ] Clear the search box -> full movie grid returns
- [ ] Submit save form with empty name -> "Please enter your name."
- [ ] Submit save form with an invalid email (e.g. "abc") -> "Enter a valid email address."
- [ ] Submit save form with valid name/email but empty watchlist -> "Your watchlist is empty."
- [ ] Submit save form with valid name/email and movies in watchlist -> green confirmation shown, watchlist stays visible (not cleared)
- [ ] Reload the page with movies in the watchlist -> watchlist restored from localStorage
- [ ] Temporarily rename data/movies.json -> "Could not load movies." shown, no crash in console
- [ ] Resize browser to phone width -> layout stacks, all buttons still tappable
- [ ] Tab through the whole page using only the keyboard -> reaches search, Add buttons, form fields, and submit button in a sensible order
