let x;
let y;
let outsideRadius = 150;
let insideRadius = 100;

function setup() {
    createCanvas(720, 400);
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(color(0, 0, 255));
    let numPoints = int(map(mouseX, 0, width, 6, 60));
    let angle = 0;
    let angleStep = 180.0 / numPoints;

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
    }
    endShape();
}

function mouseClicked() {
    if (outsideRadius > 200) {
        outsideRadius = 150;
        insideRadius = 100;
    }
    outsideRadius += 10;
    insideRadius += 10;
  }
