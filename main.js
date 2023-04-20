function preload() {
    twopiece = loadImage("One-Piece-Over-the-top.jpg")
}

function setup() {
    canvas = createCanvas(680, 480)
    canvas.center()
}

function draw() {
    fill("blue")
    circle(70, 70, 100);
    circle(580, 70, 100);
    circle(70, 380, 100);
    circle(580, 380, 100);
    fill("red")
    rect(80, 50, 90, 380, 20);
    rect(480, 50, 90, 380, 20);

    image(twopiece, 175, 160, 300, 200)
}

function takeSnapshot() {
    save("foto_onepiece.png")
}