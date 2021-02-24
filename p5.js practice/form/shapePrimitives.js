function setup() {

    createCanvas(720, 400);
    background(0);
    noStroke();
  
    fill(255, 200, 0);
    triangle(18, 18, 18, 360, 81, 360);

    colorMode(HSB);
    fill(255, 240, 100);
    rect(81, 81, 63, 63);
  
    fill('#fae');
    quad(189, 18, 216, 18, 216, 360, 144, 360);
  
    fill('rgb(20, 255, 0)');
    ellipse(252, 144, 72, 72);
  
    fill(204);
    triangle(288, 18, 351, 360, 288, 360);
  
    fill(255,200, 180);
    arc(482, 300, 280, 280, PI, TWO_PI);

    fill(200, 100, 200);
    triangle(410, 50, 310, 100, 510, 100);

    fill(25, 240, 109);
    rect(650, 18, 50, 360);
  }
  