let numCircles = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(44, 62, 158);
  fill(255, 150, 75);
  stroke(255, 150, 75);
  
  randomSeed(90);


  for (let i = 0; i < numCircles; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);


//if这句可以不需要
    if (random(1) < 0.5) {
      line(x1, y1, x2, y2);
    }
  }
}






//professor Thiago's solution


let maxPointCount = 50;
let numNeighbors = 2;

let lineWidth = 2;
let circleDiam = 2;

let mpSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mpSlider = createSlider(maxPointCount, 2000, maxPointCount, 50);
  mpSlider.position(10, 10);
  mpSlider.style("width", "400px");
}

function draw() {
  background("white");
  randomSeed(1010);
  strokeWeight(lineWidth);
  stroke(0, 32);

  maxPointCount = mpSlider.value();

  for (let p0 = 0; p0 < maxPointCount / numNeighbors; p0++) {
    let x0 = random(0, width);
    let y0 = random(0, height);
    fill(0, 32);
    ellipse(x0, y0, circleDiam);

    for (let p1 = 0; p1 < numNeighbors - 1; p1++) {
      let x1 = random(0, width);
      let y1 = random(0, height);

      fill(0, 32);
      ellipse(x1, y1, circleDiam);

      fill(0);
      line(x0, y0, x1, y1);
    }
  }
}