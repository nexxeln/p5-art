function setup() {
    createCanvas(1280, 583, WEBGL)
    angleMode(DEGREES)
}

function draw() {

    if (frameCount === 1) {
        capturer.start()
    }

    background(30)

    rotateX(60)

    noFill()
    stroke(255)

    for (let i = 0; i < 50; i++) {
        let r = map(sin(frameCount / 2), -1, 1, 100, 200)
        let g = map(i, 0, 50, 100, 200)
        let b = map(cos(frameCount), -1, 1, 200, 100)

        stroke(r, g, b)

        rotate(frameCount / 50)

        beginShape()
        for (let j = 0; j < 360; j += 50) {
            let rad = i * 3
            let x = rad * cos(j)
            let y = rad * sin(j)
            let z = sin(frameCount * 2 + i * 5) * 50

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
    if (frameCount < 600) {
            capturer.capture(canvas)
        }
    else if (frameCount === 600) {
        capturer.save()
        capturer.stop()
    }

}