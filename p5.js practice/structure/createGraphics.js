let pg;

function setup() {
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill('#fae');
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.noStroke();
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  image(pg, 150, 75);
}
