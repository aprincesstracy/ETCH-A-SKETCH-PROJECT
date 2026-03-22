const container = document.getElementById("container");
const button = document.getElementById("resizeBtn");

// Create grid
function createGrid(size) {
  container.innerHTML = ""; // clear old grid

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");

    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // hover effect
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
}

// Button click → new grid
button.addEventListener("click", () => {
  let size = prompt("Enter number of squares per side (max 100):");

  size = parseInt(size);

  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Default grid
createGrid(16);