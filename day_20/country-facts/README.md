# Country Facts Page

A simple single-page application that fetches country information from the REST Countries API and displays it on the page.

## Features

- Search for a country by name
- Displays:
  - Country name
  - Capital
  - Population
  - Region
  - Currency
  - Flag

- Shows a `Loading...` state while fetching data
- Handles HTTP and network errors
- Formats population numbers with commas
- Loads Ethiopia by default

## Technologies

- HTML
- CSS
- JavaScript
- Fetch API
- Async/Await
- DOM Manipulation

## API Used

This project was created based on the assignment requirement to use the REST Countries v3.1 API:

`https://restcountries.com/v3.1/name/{country}`

### API Status

The REST Countries v3.1 API has since been officially deprecated. Therefore, the original API endpoint used in the assignment may no longer return country data.

This is an API-side change and does not indicate an error in the JavaScript implementation.

The current REST Countries API documentation is available at:

`https://restcountries.com/`

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. The application attempts to load Ethiopia's facts by default.
5. Enter a country name in the search box and click **Search**.

## Error Handling

The application uses `try/catch` and checks `res.ok` to handle failed requests.

If the API returns an error or the country cannot be found, a friendly error message is displayed instead of allowing the application to crash.

## Assignment Note

The project follows the original assignment requirements, including the use of `async/await`, `fetch`, `res.ok`, loading and error states, and DOM manipulation with `createElement`.
