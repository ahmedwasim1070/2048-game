// const canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var c = canvas.getContext("2d");

// c.fillStyle = "rgba(255,0,0)";
// c.fillRect(100, 100, 100, 100);

// c.beginPath();
// c.moveTo(50, 400);
// c.lineTo(200, 100);
// c.stroke();

// class circle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   draw() {
//     c.beginPath();
//     c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
//     c.stroke();
//     c.fill();
//     this.x += this.dx;
//     this.y += this.dy;
//   }
// }

// var x = 200;
// var dx = 10;
// var y = 300;
// var dy = 5;
// var radius = 50;
// function animate() {
//   requestAnimationFrame(animate);
//   if (x + radius >= innerWidth || x - radius <= 0) {
//     dx = -dx;
//   }
//   if (y + radius > innerHeight || y - radius <= 0) {
//     dy = -dy;
//   }
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   const Circle = new circle(200, 300, 10, 5);
//   Circle.draw();
// }

// animate();

const canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(80, 0);
ctx.quadraticCurveTo(100, 0, 100, 20);
ctx.lineTo(100, 80);
ctx.quadraticCurveTo(100, 100, 80, 100);
ctx.lineTo(0, 100);
ctx.lineTo(0, 0);
ctx.stroke();

// const gridInput = 16;
// let boxses = 0;
// function skeletonBox(x, y, boxWidth, boxHeight, radius) {
//   if (gridInput == 16) {
//     while (x <= canvas.width || x <= canvas.height) {
//       if (x >= canvas.width) {
//         x = 0;
//         y += 104;
//       }
//       if (boxses == gridInput) {
//         break;
//       }
//       c.fillStyle = "#1f1f1f";
//       c.fillRect(x, y, boxWidth, boxHeight, radius);
//       c.fill();
//       x += 104;
//       boxses++;
//     }
//   }
// }

// function postionBox(boxNum) {
//   let x = 0,
//     y = 0;
//   for (i = 1; i <= boxNum; i++) {
//     if (x >= canvas.width) {
//       x = 0;
//       y += 104;
//     }
//     x += 104;
//   }
//   return [x, y];
// }

// function spawnVal(x, y, boxWidth, boxHeight, radius) {
//   c.fillStyle = "#ffffff";
//   c.fillRect(x, y, boxWidth, boxHeight, radius);
//   c.fill();
// }
// skeletonBox(0, 0, 100, 100, 10);
// let res = postionBox(Math.floor(Math.random() * gridInput));
// spawnVal(res[0], res[1], 100, 100, 10);
