# Birr Watch

A single-page app that tracks live exchange rates for the Ethiopian Birr (ETB). Pick a currency and amount, see the converted value, and save currencies to a watchlist that survives a page reload.

## What it does

- Fetches live exchange rates for ETB from a public API on load
- Converts any ETB amount into a chosen currency
- Lets you save currencies to a watchlist (no duplicates)
- Remembers your watchlist and last-used currency across reloads, via `localStorage`
- Shows loading, success, and error states clearly, with a retry option if the fetch fails
- Validates the amount input before doing any math

## API used

[open.er-api.com](https://open.er-api.com) — a free, no-key exchange-rate API.

```
GET https://open.er-api.com/v6/latest/ETB
```

Returns rates with ETB as the base currency, so each value is "1 ETB = X of that currency."

## How to run

No build step or dependencies. Just open `index.html` in a browser, or serve the folder locally:

## Files

`index.html` Structure: status line, convert form, result, rates table, watchlist |
`styles.css` All styling, including loading/error/empty states
`app.js` State object, fetch logic, render loop, event handlers, `localStorage` persistence

## Self-check

- [x] Loads live rates, shows loading and error states
- [x] Converts a valid amount correctly
- [x] Add / remove watchlist works, no duplicates
- [x] Survives a reload (watchlist + currency persist)
- [x] Rejects bad input (empty, zero, negative, non-numeric) cleanly
- [x] No console errors

## Design notes

The visual language is a bank passbook, not a dashboard deep banknote green, aged ledger paper, and an antique gold seal, with rates set in a monospaced "ledger" table. The converted amount appears in a small split-flap ticker that flips on each new conversion, echoing the mechanical rate boards at a currency exchange counter.

## Possible extensions

- Reverse conversion (foreign currency → ETB)
- A manual refresh button to refetch rates without reloading
- A "last updated" timestamp
