const themeToggle = document.querySelector("#themeToggle");

const THEME_KEY = "ibtTheme";

const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const message = document.querySelector("#message");
const signupCount = document.querySelector("#signupCount");
const userList = document.querySelector("#userList");

const STORAGE_KEY = "ibtSignups";

// Ethiopian phone number:
// +251 followed by 9 digits starting with 9
// Example: +251912345678
const ethiopianPhoneRegex = /^(?:\+251|0)9\d{8}$/;

// Get saved users from localStorage
function getSignups() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return [];
  }

  try {
    return JSON.parse(savedData);
  } catch (error) {
    console.error("Could not read saved signups:", error);
    return [];
  }
}

// Save users to localStorage
function saveSignups(signups) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(signups));
}

// Show a message to the user
function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

// Clear the message
function clearMessage() {
  message.textContent = "";
  message.className = "";
}

// Render saved users on the page
function renderSignups() {
  const signups = getSignups();

  signupCount.textContent = signups.length;

  userList.innerHTML = "";

  signups.forEach(function (user) {
    const listItem = document.createElement("li");

    listItem.textContent = `${user.name} - ${user.phone}`;

    userList.appendChild(listItem);
  });
}

// Handle form submission
form.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  clearMessage();

  // Read and trim values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Validate name
  if (name.length < 2) {
    showMessage("Please enter a name with at least two characters.", "error");

    nameInput.focus();
    return;
  }

  // Validate phone number
  if (!ethiopianPhoneRegex.test(phone)) {
    showMessage(
      "Please enter a valid Ethiopian phone number, for example +251912345678.",
      "error",
    );

    phoneInput.focus();
    return;
  }

  // Get existing signups
  const signups = getSignups();

  // Create new signup
  const newSignup = {
    name: name,
    phone: phone,
  };

  // Add the new signup
  signups.push(newSignup);

  // Save updated list
  saveSignups(signups);

  // Show success message
  showMessage("Signup successful!", "success");

  // Clear the form
  form.reset();

  // Update the displayed list and count
  renderSignups();
});

// Restore saved signups when the page loads
document.addEventListener("DOMContentLoaded", function () {
  renderSignups();
});

function saveTheme(theme) {
  save(THEME_KEY, theme);
}

function loadTheme() {
  return load(THEME_KEY, "light");
}

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");

  if (theme === "dark") {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
}

themeToggle.addEventListener("click", function () {
  const currentTheme = loadTheme();

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  saveTheme(newTheme);
  applyTheme(newTheme);
});

applyTheme(loadTheme());

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function load(key, fallback = []) {
  const savedData = localStorage.getItem(key);

  if (savedData === null) {
    return fallback;
  }

  try {
    return JSON.parse(savedData);
  } catch (error) {
    console.error("Corrupt localStorage data:", error);
    return fallback;
  }
}
