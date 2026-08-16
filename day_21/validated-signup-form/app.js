const PHONE = /^(?:\+251|0)9\d{8}$/;

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const error = document.getElementById("error");
const entriesList = document.getElementById("entries");

const STORAGE_KEY = "signupEntries";

function validate(name, phone) {
  if (name.length < 2) {
    return "Enter your full name.";
  }

  if (!PHONE.test(phone)) {
    return "Enter a valid Ethiopian phone number.";
  }

  return "";
}

function loadEntries() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData === null) {
    return [];
  }

  try {
    const entries = JSON.parse(savedData);

    if (!Array.isArray(entries)) {
      return [];
    }

    return entries;
  } catch (error) {
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function renderEntries(entries) {
  entriesList.textContent = "";

  entries.forEach(function (entry) {
    const listItem = document.createElement("li");

    listItem.textContent = `${entry.name} - ${entry.phone}`;

    entriesList.appendChild(listItem);
  });
}

let entries = loadEntries();

renderEntries(entries);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  const message = validate(name, phone);

  if (message !== "") {
    error.textContent = message;
    return;
  }

  error.textContent = "";

  const newEntry = {
    name: name,
    phone: phone,
  };

  entries.push(newEntry);

  saveEntries(entries);

  renderEntries(entries);

  form.reset();
});
