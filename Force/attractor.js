class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 25, 2500);

    const G = 1;

    let strength = (G * (this.mass * mover.mass)) / distanceSq;
    force.setMag(strength);

    mover.applyForce(force);
  }

  update(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
