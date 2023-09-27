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

    if (random(1) < 0.5) {
      line(x1, y1, x2, y2);
    }
  }
}