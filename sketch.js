let space = 8.5;
let pixelX = 0.5;
let pixelY = 8;

let sizeX, sizeY;

let count = 0;

let randRot;

let speed = 1;

// DEFINED FROM 0 to 1. 0 BEING TOP OF THE CANVAS, 1 BEING BOTTOM OF CANVAS.
let runHeight = 0.5;
let start = 0.75;


function setup() {
  
  sizeX = int(random(20,40));
  sizeY = int(random(20,40));
  
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 255)
  
  // background(255);
  
  randH = random(0, 255)
  randRot = random(-1, 1)
}

function draw() {
  
  noStroke();

  
  translate(width * 0.5, start * height - count * speed);
  scale(1, 0.2);
  rotate(45 + count * 0.01 * randRot);
  

  
  for (let w = 0; w < sizeX; w++){
    
    for (let h = 0; h < sizeY; h++){
      
      let n1 = noise(w * frameCount * 0.0001, 0.1)
      let n2 = noise(0.1, h * frameCount * 0.0001)

      n1 = map(n1, 0, 1, -25, 25)
      n2 = map(n2, 0, 1, -25, 25);
      
      
      
      fill(randH + h * 0.4, 150, 220, 140)
      
      
      push();
      translate((space * sizeX / 2) - (space * w), (space * sizeY / 2) - (space * h))
      rotate(-45)
      rect(n1, n2, pixelX , pixelY);
      pop();
      
    }
  }
  
  count++

  if (count * speed  > runHeight * height) {
    noLoop();
  }
  
  
}


