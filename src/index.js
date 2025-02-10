const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let matrix = [[{ x: 0, y: 0 }]];

function renderRoundedBox(x, y, width, height, radius, text) {
  radius = Math.min(radius, width / 2, height / 2);

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();

  if (text != null) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let textX = x + width / 2;
    let textY = y + width / 2;
    ctx.fillText(text, textX, textY);
  }
}

function spawnBox(boxValue) {
  let x = 0,
    y = 0,
    temp = 0;
  while (temp == boxValue) {
    if (x >= canvas.width - 104) {
      (x = 0), (y += 104);
    }
    temp++;
    x += 104;
  }
  for (let i = 0; i < row; i++) {
    box[i] = [];
    for (let j = 0; j < coloum; j++) {}
  }
}

function spawnPlatform(x, y) {
  while (y <= canvas.height) {
    ctx.fillStyle = "#1e1e1e";
    renderRoundedBox(x, y, 100, 100, 10, null);
    if (x <= canvas.width - 104) {
      x += 104;
    } else {
      (y += 104), (x = 0);
    }
  }
}

function checkDuplicates(val) {
  let temp = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (temp == val) {
        return [i, j];
      }
      temp += 1;
    }
  }
  return null;
}

function generateRandomValue(max) {
  let result = Math.floor(Math.random() * max);
  let idx = checkDuplicates(result);
  if (matrix[idx[0]][idx[1]] != 0) {
    return generateRandomVal(max);
  } else {
    matrix[idx[0]][idx[1]] = 1;
  }
  return result;
}

spawnPlatform(0, 0);
window.addEventListener("keydown", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    spawnBox(generateRandomValue(16));
  }
});
