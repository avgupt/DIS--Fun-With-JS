function setup() {
    createCanvas(720, 400);
    background(51);
    noStroke();
    noLoop();
  }
  
  function draw() {
    drawTarget(width * 0.10, height * 0.3, 100, 5);
    drawTarget(width * 0.90, height * 0.3, 100, 5);
    drawTarget(width * 0.25, height * 0.4, 200, 10);
    drawTarget(width * 0.75, height * 0.4, 200, 10);
    drawTarget(width * 0.5, height * 0.5, 300, 20);
    drawTarget(width * 0.5, height * 0.75, 200, 30);
  }
  
  function drawTarget(xloc, yloc, size, num) {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
      fill(i * grayvalues);
      ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
  }
  