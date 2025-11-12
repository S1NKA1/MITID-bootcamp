

function preload() {
    // Load resources before setup
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
    noStroke();
    fill(100, 150, 255);
}

function draw() {
    background(220);

    // Original circle follows mouse
    circle(mouseX, mouseY, 100);

    // Mirror circle across the vertical center line
    let mirrorX = width - mouseX;
    circle(mirrorX, mouseY, 100);

    // Draw the mirror line
    stroke(0);
    line(width / 2, 0, width / 2, height);
}

function mousePressed() {
    // Optional: change color when clicked
    fill(random(255), random(255), random(255));
}
