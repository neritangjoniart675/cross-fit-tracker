/*

Filename: ComplexCode.js

Description: This code below is a complex implementation of a web-based application that simulates a virtual world with interactive objects and physics simulation. It includes features like object creation, manipulation, physics-based movements, collision detection, and basic user interaction.

*/

// Define global variables
let objects = [];
let canvas;
let context;
let mousePosition = { x: 0, y: 0 };

// Object class representing a virtual object in the world
class Object {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = { x: 0, y: 0 };
    this.mass = 1;
    this.friction = 0.95;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;

    if (this.x <= 0 || this.x + this.width >= canvas.width) {
      this.velocity.x *= -1;
    }

    if (this.y <= 0 || this.y + this.height >= canvas.height) {
      this.velocity.y *= -1;
    }
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

function initialize() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // Add event listeners for mouse movement
  canvas.addEventListener("mousemove", function(event) {
    mousePosition.x = event.clientX - canvas.offsetLeft;
    mousePosition.y = event.clientY - canvas.offsetTop;
  });

  // Create objects
  objects.push(new Object(100, 100, 50, 50, "red"));
  objects.push(new Object(300, 200, 75, 75, "blue"));
  objects.push(new Object(500, 300, 100, 100, "green"));

  // Start the animation loop
  animate();
}

function animate() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw objects
  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    
    // Apply attraction towards the mouse position
    const dx = mousePosition.x - obj.x - obj.width / 2;
    const dy = mousePosition.y - obj.y - obj.height / 2;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 0) {
      obj.velocity.x += dx / distance;
      obj.velocity.y += dy / distance;
    }
    
    obj.update();
    obj.draw();
  }

  // Recursive animation loop
  requestAnimationFrame(animate);
}

// Invoke initialization
initialize();