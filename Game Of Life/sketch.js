const create2dArray = (cols, rows) => {
  let arr = new Array(cols);

  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
};

const countNeighbors = (grid, x, y) => {
  let neighbors = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;

      neighbors += grid[col][row];
    }
  }

  // subtract self from neighbor count:
  neighbors -= grid[x][y];

  return neighbors;
};

let grid, next, neighbors;
let cols,
  rows,
  res = 15;

function setup() {
  let canvas = createCanvas(750, 600);
  canvas.addClass("canvas01");

  cols = Math.round(width / res);
  rows = Math.round(height / res);

  grid = create2dArray(cols, rows);
  neighbors = create2dArray(cols, rows);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      grid[x][y] = random([0, 1]);
    }
  }
}

function draw() {
  background(51);

  if (mouseIsPressed) {
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        next[x][y] = random([0, 1]);
      }
    }
  }

  next = create2dArray(cols, rows);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let state = grid[x][y];

      // calculate neighbors:
      let neighborsCount = countNeighbors(grid, x, y);
      neighbors[x][y] = neighborsCount;

      if (state === 0 && neighborsCount === 3) {
        next[x][y] = 1;
      } else if (state === 1 && (neighborsCount < 2 || neighborsCount > 3)) {
        next[x][y] = 0;
      } else {
        next[x][y] = state;
      }
    }
  }

  // draw:
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let state = grid[x][y];
      let posX = x * res;
      let posY = y * res;

      // draw rect:
      fill(51);
      if (state === 1) {
        fill(map(neighbors[x][y], 0, 8, 150, 255));
      }
      rect(posX, posY, res, res);

      // draw neighbors count:
      fill(0, 255, 255);
      textAlign(CENTER, CENTER);
      textSize(res / 2 + 2);
      text(neighbors[x][y], posX + res / 2, posY + res / 2);
    }
  }

  // set grid to next pos:
  grid = [...next];
}
