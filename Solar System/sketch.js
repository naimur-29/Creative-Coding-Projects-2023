let R = 400;
let r = 120;
let r2 = 200;
let r3 = 80;
let x, y;
let a = 0;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.addClass("canvas01");
}

function draw() {
  background(0, 50);
  noStroke();

  a += 0.025;
  push();
  translate(width / 2, height / 2);

  // sun
  let X = R * sin(a / 2) * 0;
  let Y = R * cos(a / 2) * 0;

  fill(255, 255, 0);
  ellipse(X, Y, 50, 50);

  // planet 1
  x = r3 * sin(a * 2) + X;
  y = r3 * cos(a * 2) + Y;

  fill(255, 100, 0);
  ellipse(x, y, 10, 10);

  // planet 2
  x = r2 * sin(a / 3) + X;
  y = r2 * cos(a / 3) + Y;

  fill(100, 100, 255);
  ellipse(x, y, 22, 22);

  // moon 1
  let x2 = (r / 5) * sin(a * 8);
  let y2 = (r / 5) * cos(a * 8);

  fill(255);
  ellipse(x + x2, y + y2, 5, 5);

  // moon 2
  x2 = (r / 3) * cos(a * 5);
  y2 = (r / 3) * sin(a * 5);
  ellipse(x + x2, y + y2, 8, 8);

  // earth?
  x = r * sin(a) + X;
  y = r * cos(a) + Y;

  fill(0, 200, 255);
  ellipse(x, y, 16, 16);

  // moon?
  x2 = (r / 7) * cos(a * 5);
  y2 = (r / 7) * sin(a * 5);

  fill(255);
  ellipse(x + x2, y + y2, 5, 5);

  pop();
}
