let movers = [];
let attractors = [];

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 1000; i++) {
    movers[i] = new Agent(random(width / 2), random(height / 2), 1);
  }

  attractors[0] = new Attractor(width / 2, height / 2, 1000);
}

function draw() {
  background(0, 10);

  for (let attractor of attractors) {
    attractor.show();

    for (let mover of movers) {
      mover.update();
      mover.show();
      attractor.attract(mover);
    }
  }
}
