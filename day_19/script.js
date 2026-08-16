// ========================================
// DAY 19 - DOM PRACTICE
// ========================================

// ========================================
// 1. textContent + classList.toggle
// ========================================

const exerciseTitle = document.querySelector("#exerciseTitle");
const changeTitleBtn = document.querySelector("#changeTitleBtn");

changeTitleBtn.addEventListener("click", () => {
  // Change the text
  exerciseTitle.textContent = "The Title Has Changed!";

  // Add/remove the CSS class
  exerciseTitle.classList.toggle("highlight");
});

// ========================================
// 2. createElement + append
// ========================================

const cities = ["Addis Ababa", "Dire Dawa", "Bahir Dar"];

const cityList = document.querySelector("#cityList");

cities.forEach((city) => {
  // Create a new <li>
  const li = document.createElement("li");

  // Add city name
  li.textContent = city;

  // Add <li> to <ul>
  cityList.append(li);
});

// ========================================
// 3. Event Bubbling
// ========================================

const bubbleButton = document.querySelector("#bubbleButton");
const bubbleBox = document.querySelector("#bubbleBox");

// Button listener
bubbleButton.addEventListener("click", (event) => {
  console.log("Button listener");
  console.log("event.target:", event.target);
});

// Parent div listener
bubbleBox.addEventListener("click", (event) => {
  console.log("DIV listener");
});

// When the button is clicked:
//
// 1. Button listener runs
// 2. Event bubbles up
// 3. DIV listener runs

// ========================================
// 4. Event Delegation - Delete Items
// ========================================

const itemList = document.querySelector("#itemList");

itemList.addEventListener("click", (event) => {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains("delete-btn")) {
    // Find the <li> containing the button
    const item = event.target.parentElement;

    // Remove the item
    item.remove();
  }
});

// ========================================
// 5. Form Submit
// ========================================

const itemForm = document.querySelector("#itemForm");
const itemInput = document.querySelector("#itemInput");
const formList = document.querySelector("#formList");

itemForm.addEventListener("submit", (event) => {
  // Stop page from refreshing
  event.preventDefault();

  // Read input value
  const value = itemInput.value.trim();

  // Make sure input isn't empty
  if (value === "") {
    return;
  }

  // Create a new list item
  const li = document.createElement("li");

  // Put input text inside it
  li.textContent = value;

  // Add it to the list
  formList.append(li);

  // Clear input
  itemInput.value = "";

  // Put cursor back in input
  itemInput.focus();
});
