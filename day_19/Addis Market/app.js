// ========================================
// ADDIS MARKET
// WEEK-2 PROJECT
// ========================================

// ========================================
// 1. CACHE ELEMENT REFERENCES
// ========================================

const form = document.querySelector("#add-form");

const nameInput = document.querySelector("#name");

const priceInput = document.querySelector("#price");

const list = document.querySelector("#list");

const totalEl = document.querySelector("#total");

const emptyMessage = document.querySelector("#empty-message");

// ========================================
// 2. ADD A NEW ITEM ROW
// ========================================

function addRow(itemName, itemPrice) {
  // Create the <li>
  const li = document.createElement("li");

  // Add the shopping-item class
  li.classList.add("shopping-item");

  // Store the price on the row
  li.dataset.price = itemPrice;

  // ------------------------------------
  // Create item information container
  // ------------------------------------

  const info = document.createElement("div");

  info.classList.add("item-info");

  // ------------------------------------
  // Create item name
  // ------------------------------------

  const name = document.createElement("span");

  name.classList.add("item-name");

  name.textContent = itemName;

  // ------------------------------------
  // Create item price
  // ------------------------------------

  const price = document.createElement("span");

  price.classList.add("item-price");

  price.textContent = `${itemPrice.toFixed(2)} ETB`;

  // Add name and price to information
  info.append(name, price);

  // ------------------------------------
  // Create delete button
  // ------------------------------------

  const deleteButton = document.createElement("button");

  deleteButton.classList.add("del");

  deleteButton.textContent = "Delete";

  deleteButton.type = "button";

  // ------------------------------------
  // Add everything to the <li>
  // ------------------------------------

  li.append(info, deleteButton);

  // ------------------------------------
  // Add the <li> to the <ul>
  // ------------------------------------

  list.append(li);
}

// ========================================
// 3. UPDATE TOTAL
// ========================================

function updateTotal() {
  let total = 0;

  // Get all shopping rows
  const rows = list.querySelectorAll(".shopping-item");

  // Add every item's price
  rows.forEach((row) => {
    const price = Number(row.dataset.price);

    total += price;
  });

  // Display total
  totalEl.textContent = total.toFixed(2);

  // Update empty message
  updateEmptyMessage();
}

// ========================================
// 4. UPDATE EMPTY MESSAGE
// ========================================

function updateEmptyMessage() {
  if (list.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

// ========================================
// 5. FORM SUBMIT
// ========================================

form.addEventListener("submit", (event) => {
  // Prevent the browser from reloading
  event.preventDefault();

  // Read the item name
  const itemName = nameInput.value.trim();

  // Convert price from string to number
  const itemPrice = Number(priceInput.value);

  // ====================================
  // VALIDATE ITEM NAME
  // ====================================

  if (!itemName) {
    alert("Please enter an item name.");

    nameInput.focus();

    return;
  }

  // ====================================
  // VALIDATE PRICE
  // ====================================

  if (!itemPrice || itemPrice <= 0) {
    alert("Please enter a valid ETB price.");

    priceInput.focus();

    return;
  }

  // ====================================
  // ADD ITEM
  // ====================================

  addRow(itemName, itemPrice);

  // ====================================
  // CLEAR FORM
  // ====================================

  form.reset();

  // ====================================
  // UPDATE TOTAL
  // ====================================

  updateTotal();

  // Put cursor back in name field
  nameInput.focus();
});

// ========================================
// 6. DELEGATED CLICK LISTENER
// ========================================

list.addEventListener("click", (event) => {
  // ====================================
  // DELETE ITEM
  // ====================================

  if (event.target.matches(".del")) {
    const row = event.target.closest("li");

    row.remove();

    updateTotal();

    return;
  }

  // ====================================
  // TOGGLE BOUGHT STATE
  // ====================================

  const row = event.target.closest("li");

  if (row) {
    row.classList.toggle("bought");
  }
});

// ========================================
// 7. INITIAL PAGE STATE
// ========================================

updateTotal();
