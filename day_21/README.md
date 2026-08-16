# Signup Form

## Exercise

Build a validated and persistent signup form using HTML, CSS, JavaScript, regular expressions, and localStorage.

The form collects:

- Full name
- Ethiopian phone number

Successful signups are saved in the browser using localStorage.

---

## Files

### index.html

Contains the signup form and page structure.

### app.js

Contains:

- Form submission handling
- Input validation
- Ethiopian phone number regex
- localStorage
- JSON parsing and stringifying
- Signup rendering
- Signup count
- Error and success messages

---

## Requirements

The application must:

1. Have a labelled name input.
2. Have a labelled Ethiopian phone input.
3. Have a submit button.
4. Have an error/message area.
5. Prevent the default form submission.
6. Trim the entered values.
7. Validate the name.
8. Validate the phone number using an Ethiopian phone regex.
9. Display a specific error message when validation fails.
10. Save successful signups to localStorage as JSON.
11. Clear the form after a successful signup.
12. Restore saved signups when the page loads.
13. Display the number of people who have signed up.

---

## Ethiopian Phone Regex

The application uses:

```javascript
/^(?:\+251|0)9\d{8}$/;
```
