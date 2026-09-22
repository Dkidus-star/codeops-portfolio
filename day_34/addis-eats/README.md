# Addis Eats — Day 33

A React checkout form focused on form state, validation, accessibility, and error handling.

## Features

- Checkout form with four fields:
  - Full Name
  - TeleBirr Phone
  - Delivery Area
  - Optional Notes

- All form fields stored in one state object
- Pure `validate(form)` function
- Validation errors derived on every render
- Errors shown after the field is touched
- Validation on blur
- Accessible labels for every field
- `aria-invalid` for invalid fields
- `aria-describedby` connecting fields to their error messages
- `role="alert"` for validation and submission errors
- Submitting state to prevent double submission
- ETB cart total displayed in the submit button
- Failed request handling
- Form values preserved after a failed request
- Focus moves to the first invalid field
- Zustand cart from Day 32 remains persistent across refreshes
- Protected checkout route using authentication

## Technologies

- React
- JavaScript
- React Router
- Zustand
- Vite

## Project Structure

```text
src/
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── pages/
│   ├── Checkout.jsx
│   ├── CartPage.jsx
│   ├── DishPage.jsx
│   ├── Home.jsx
│   ├── MenuPage.jsx
│   ├── NotFound.jsx
│   └── SignIn.jsx
├── store/
│   └── cartStore.js
├── App.jsx
├── Layout.jsx
├── RequireAuth.jsx
└── Dish.jsx
```

## What I Learned

### Form State

Multiple form fields can be stored in one state object:

```js
const [form, setForm] = useState({
  name: "",
  phone: "",
  area: "",
  notes: "",
});
```

### Pure Validation

The `validate()` function checks the form and returns an errors object without modifying the form.

```js
const errors = validate(form);
```

### Touched Fields

A field is marked as touched when the user leaves it.

```js
onBlur = { handleBlur };
```

Errors are displayed only when the field has been touched.

### Accessibility

The checkout form connects labels, inputs, and error messages using:

- `htmlFor`
- `aria-invalid`
- `aria-describedby`
- `role="alert"`

### Submitting State

The submit button is disabled while an order is being processed to prevent double submission.

### Error Handling

If the request fails, the application:

1. Shows an error message
2. Keeps all form values
3. Stops the submitting state
4. Focuses the first invalid field when applicable

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local Vite URL in your browser.

## Day 33 Goal

The goal of Day 33 was to build a complete, accessible checkout form with validation, submission state, and failure handling.
