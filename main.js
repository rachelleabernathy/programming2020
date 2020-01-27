let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color in lowercase", "teal");
let stroke3 = prompt("enter a mouth color in lowercase", "pink");

function setup() {
    createCanvas(1000, 800);
    background("lightblue");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    //background(grid);
    // snowman legs
    fill("white");
    strokeWeight(20);
    stroke(stroke1);
    // left
    ellipse(350, 650, 200);
    // right leg
    ellipse(650, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    //hat top
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(0); //0 is the same as black
    strokeWeight(30);
    point(450, 200);
    point(550, 200);
    //mouth
    noFill();
    stroke(stroke3);
    strokeWeight(10);
    arc(500, 220, 50, 40, 0, HALF_PI);

    //tree
    triangle(100, 100, 300, 300, 300, 50);
    
}