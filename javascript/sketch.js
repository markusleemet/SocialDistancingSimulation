let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let numberOfSprites = 20;
let spriteRadius = 50;

var sprites;

function setup(){
    console.log("setup");
    createCanvas(canvasWidth, canvasHeight);
    sprites = new Group();

    for (let i = 0; i < numberOfSprites; i++) {
        let sprite = createSprite(
            random(spriteRadius, canvasWidth - spriteRadius),
            random(spriteRadius, canvasHeight - spriteRadius),
            spriteRadius * 2,
            spriteRadius * 2)
        sprite.shapeColor = color(random(255), random(255), random(255))
        sprite.setVelocity(random(-5, 5), random(-5, 5))
        sprites.add(sprite)
    }
}

function draw() {
    background('#4fe75f');
    frameRate(60)
    drawSprites(sprites)
}

