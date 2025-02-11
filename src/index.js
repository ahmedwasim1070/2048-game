const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let rows = 4,
  coloums = 4;
let boxses = [];

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

function createBoxses() {
  let x = 0,
    y = 0;
  for (let i = 0; i < rows; i++) {
    boxses[i] = [];
    for (let j = 0; j < coloums; j++) {
      boxses[i][j] = { value: 0, x: x, y: y, boxColor: "white" };
      if (x < canvas.width - 104) {
        x += 104;
      } else {
        (x = 0), (y += 104);
      }
    }
  }
}

function drawBoxses() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < coloums; j++) {
      if (boxses[i][j].value != 0) {
        ctx.fillStyle = boxses[i][j].boxColor;
        renderRoundedBox(
          boxses[i][j].x,
          boxses[i][j].y,
          100,
          100,
          10,
          boxses[i][j].value
        );
      }
    }
  }
}

function moveBoxses(direction) {
  let moved = false;
  if (direction === "ArrowUp") {
    for (let j = 0; j < coloums; j++) {
      for (let i = 1; i < rows; i++) {
        if (boxses[i][j].value) {
          let k = i;
          while (k > 0 && boxses[k - 1][j].value === 0) {
            boxses[k - 1][j].value = boxses[k][j].value;
            boxses[k][j].value = 0;
            k--;
            moved = true;
          }
        }
      }
    }
  }

  if (direction === "ArrowDown") {
    for (let j = 0; j < coloums; j++) {
      for (let i = rows - 2; i >= 0; i--) {
        if (boxses[i][j].value) {
          let k = i;
          while (k < rows - 1 && boxses[k + 1][j].value === 0) {
            boxses[k + 1][j].value = boxses[k][j].value;
            boxses[k][j].value = 0;
            k++;
            moved = true;
          }
        }
      }
    }
  }

  if (direction === "ArrowLeft") {
    for (let i = 0; i < rows; i++) {
      for (let j = 1; j < coloums; j++) {
        if (boxses[i][j].value) {
          let k = j;
          while (k > 0 && boxses[i][k - 1].value === 0) {
            boxses[i][k - 1].value = boxses[i][k].value;
            boxses[i][k].value = 0;
            k--;
            moved = true;
          }
        }
      }
    }
  }

  if (direction === "ArrowRight") {
    for (let i = 0; i < rows; i++) {
      for (let j = coloums - 2; j >= 0; j--) {
        if (boxses[i][j].value) {
          let k = j;
          while (k < coloums - 1 && boxses[i][k + 1].value === 0) {
            boxses[i][k + 1].value = boxses[i][k].value;
            boxses[i][k].value = 0;
            k++;
            moved = true;
          }
        }
      }
    }
  }

  if (moved) {
    generateRandomValue(16);
  }
  drawBoxses()
}

function generateRandomValue(max) {
  let result = Math.floor(Math.random() * max);
  let temp = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < coloums; j++) {
      temp++;
      if (temp === result) {
        let ans = boxses[i][j].value;
        if (ans != 0) {
          return generateRandomValue(max);
        }
        boxses[i][j].value = result % 2 == 0 ? 2 : 4;
      }
    }
  }
  drawBoxses();
}

window.addEventListener("keydown", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    moveBoxses(event.key);
  }
});

spawnPlatform(0, 0);
createBoxses();
generateRandomValue(16);
