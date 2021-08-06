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
