# Validated Persistent Signup Form

A small JavaScript signup form that validates a user's name and Ethiopian phone number, displays clear validation errors, and saves valid signups to localStorage as JSON.

## Features

- Validates names with at least two characters.
- Validates Ethiopian phone numbers using regex.
- Accepts both `0912345678` and `+251912345678` formats.
- Shows clear and specific validation messages.
- Uses `textContent` for user-facing text.
- Prevents the default form submission.
- Trims input values before validation.
- Saves valid signups to localStorage as JSON.
- Restores saved signups after a page reload.
- Handles missing localStorage data.
- Handles corrupt JSON with `try...catch`.
- Displays the number of registered users.
- Includes a persistent dark/light theme toggle.

## Technologies

- HTML
- CSS
- JavaScript
- Regular Expressions
- localStorage
- JSON

## Ethiopian Phone Regex

The form uses:

```javascript
/^(?:\+251|0)9\d{8}$/;
```
