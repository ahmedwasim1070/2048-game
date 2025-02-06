const canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");

function renderRoundedBox(x, y, width, height, radius) {
  // Ensure the radius does not exceed half the width or height
  radius = Math.min(radius, width / 2, height / 2);

  ctx.beginPath();
  ctx.moveTo(x + radius, y); // Start at the top-left corner with a radius offset
  ctx.lineTo(x + width - radius, y); // Draw top edge
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius); // Top-right corner
  ctx.lineTo(x + width, y + height - radius); // Right edge
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height); // Bottom-right corner
  ctx.lineTo(x + radius, y + height); // Bottom edge
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius); // Bottom-left corner
  ctx.lineTo(x, y + radius); // Left edge
  ctx.quadraticCurveTo(x, y, x + radius, y); // Top-left corner
  ctx.closePath();
  ctx.fill();
}

function spawnBoxses(x, y) {
  while (y <= canvas.height) {
    ctx.fillStyle = "#1e1e1e";
    renderRoundedBox(x, y, 100, 100, 10);
    if (x <= canvas.width - 104) {
      x += 104;
    } else {
      (y += 104), (x = 0);
    }
  }
}

function generateRandomVal(max) {
  return Math.floor(Math.random() * max);
}

function getPosBox(boxVal) {
  let x = 0;
  let y = 0;
  let temp = 0;
  while (temp < boxVal) {
    if (x < canvas.width - 104) {
      x += 104;
    } else {
      (y += 104), (x = 0);
    }
    temp += 1;
  }
  ctx.fillStyle = "#ffff";
  console.log(x, y);
  renderRoundedBox(x, y, 100, 100, 10);
}
spawnBoxses(0, 0);
getPosBox(generateRandomVal(16));
window.addEventListener("keydown", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    getPosBox(generateRandomVal(16));
  }
});
