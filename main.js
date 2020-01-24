function setup() {
    //put setup code here
    createCanvas(640, 480);
}

function draw() {
    // put drawing code here
    
    if (mouseIsPressed) {
        fill("teal");
        ellipse(mouseX, mouseY, 80, 80);
    } else {
        fill(0);
    }
}