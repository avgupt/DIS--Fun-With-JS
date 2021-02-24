function setup() {
    let d = 70;
    let p1 = d;
    let p2 = p1 + d;
    let p3 = p2 + d;
    let p4 = p3 + d;
  
    createCanvas(720, 400);
    background(0);
    noSmooth();
  
    translate(140, 0);
  
    stroke(153);
    for (let i = 0; i <= 20; i += 5) {
      line(p3 + i, p3, p2 + i, p3);
      line(p2 + i, p3, p2 + i, p2);
      line(p2 + i, p2, p3 + i, p2);
      line(p3 + i, p2, p3 + i, p3);
    }

    for (let i = 0; i <= 20; i += 5) {
      line(p3, p3 + i, p2, p3 + i);
      line(p2, p3 + i, p2, p2 + i);
      line(p2, p2 + i, p3, p2 + i);
      line(p3, p2 + i, p3, p3 + i);
    }

    stroke(255);
    point(p1, p1);
    point(p1, p3);
    point(p2, p4);
    point(p3, p1);
    point(p4, p2);
    point(p4, p4);
  }
  