//your JS code here. If required.
// Create a canvas element and get its 2D context
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// Set the size of the canvas
canvas.width = 400;
canvas.height = 400;

// Add the canvas element to the DOM
document.body.appendChild(canvas);

// Define the center point and radius of the circle
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;

// Define the angle of the line in radians
let angle = 0;

// Define the function to draw the line
function drawLine() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate the end points of the line
  const startX = centerX + Math.cos(angle) * radius;
  const startY = centerY + Math.sin(angle) * radius;
  const endX = centerX + Math.cos(angle + Math.PI) * radius;
  const endY = centerY + Math.sin(angle + Math.PI) * radius;

  // Draw the line
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  // Increment the angle by a small amount
  angle += 0.01;
}

// Call the drawLine function every 10 milliseconds
setInterval(drawLine, 10);
