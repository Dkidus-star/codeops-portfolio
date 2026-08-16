# Day 20 - Async/Await and API Fetching Exercises

## Overview

This project contains 5 exercises demonstrating async/await, error handling, and API fetching in JavaScript.

## Exercises

### Exercise 1: USD to ETB Rate

- Fetches live exchange rate from a public API
- Demonstrates `res.ok` checking
- Returns and displays USD→ETB conversion rate

### Exercise 2: Async/Await Chain

- Rewrites a `.then` chain as async/await
- Uses `try/catch` for error handling
- Fetches and renders posts from JSONPlaceholder

### Exercise 3: Error Handling

- Tests network errors with wrong URLs
- Tests HTTP errors with 404 responses
- Demonstrates why `res.ok` is essential

### Exercise 4: Promise.all

- Fetches a list of users
- Uses `Promise.all` to fetch details in parallel
- Shows performance benefits of concurrent requests

### Exercise 5: Loading States

- Interactive page with three states: Loading, Success, Error
- Simulates slow network and errors
- Visual feedback for each state

## How to Run

1. Open any exercise's `index.html` in a browser
2. Click the buttons to trigger API calls
3. For Exercise 5, use the simulation buttons to test different states
4. Open DevTools (F12) to see network activity and console logs

## APIs Used

- Exchange Rate API: `https://api.exchangerate-api.com/v4/latest/USD`
- JSONPlaceholder: `https://jsonplaceholder.typicode.com`

## Key Learnings

- Async/await syntax vs .then chains
- Error handling with try/catch
- Importance of checking `res.ok`
- Parallel fetching with `Promise.all`
- Managing UI states during async operations
