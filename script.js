const gridContainer = document.querySelector("");
const controlsContainer = document.querySelector("");
let squaresPerSide = 16;
let cell = [];
let currentlyActive = false;
let currentColor = [];

gridContainer.addEventListener("click", function () {
  togglePen();
});

//Controls:

//Clear:
const resetButton = document.querySelector("#clear");
resetButton.addEventListener("click", clear);

//New Grid:
const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", function () {
  clear();
  createGrid(newSize.value);
});

//Range Bar and Display:
let newSize = document.querySelector("#new-size");
newSize.value = 16;
let displaySize = document.querySelector("#size-label");
displaySize.textContent = newSize.value;
newSize.addEventListener("mousemove", function () {
  displaySize.textContent = newSize.value;
});
