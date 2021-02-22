let y;

function setup() {
  createCanvas(720, 400);
  stroke(255);
  noLoop();
  y = height * 0.5;
}

function draw() {
  background(0);
  if (y < 0) {
    y = height;
  }
  if (y > height) {
      y = 0;
  }
  line(0, y, width, y);
}

function mouseWheel(event) {
    y += event.delta;
    redraw();
}
