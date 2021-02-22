let y = 100;
let x1 = 0;
let x2 = 0;

function setup() {
  createCanvas(720, 400);
  frameRate(30);
}

function draw() {
  stroke(255); 
  background(0); 
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
  stroke(255, 204, 0);
  x1 += 1;
  if (x1 > width) {
      x1 = 0;
  }
  line(x1, 0, x1, height);
}
