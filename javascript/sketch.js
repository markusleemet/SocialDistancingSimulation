let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let numberOfSprites = 20;
let spriteRadius = 50;

var sprites;
var walls;

function setup(){
    console.log("setup");
    createCanvas(canvasWidth, canvasHeight);
    sprites = new Group();
    walls = new Group();

    // Create moving objects
    for (let i = 0; i < numberOfSprites; i++) {
        let sprite = createSprite(
            random(spriteRadius, canvasWidth - spriteRadius),
            random(spriteRadius, canvasHeight - spriteRadius),
            spriteRadius * 2,
            spriteRadius * 2);
        sprite.shapeColor = color(random(255), random(255), random(255));
        sprite.setVelocity(random(-5, 5), random(-5, 5));
        sprite.setCollider('rectangle')
        sprite.collide(sprites, function(){
            sprite.setVelocity(random(-5, 5), random(-5, 5))
        })
        sprites.add(sprite);
    }

    //Create walls so that objects aren't able to leave canvas
    createBorders()
}

function draw() {
    background('#4fe75f');
    frameRate(60);
    sprites.bounce(walls)
    sprites.bounce(sprites)
    drawSprites(sprites);
    drawSprites(walls);
}

function createBorders(){
    topWall = createSprite(canvasWidth / 2, spriteRadius, canvasWidth, spriteRadius * 2);
    topWall.immovable = true;
    walls.add(topWall);

    bottomWall = createSprite(canvasWidth / 2, canvasHeight - spriteRadius,  canvasWidth, spriteRadius * 2);
    bottomWall.immovable = true;
    walls.add(bottomWall);

    leftWall = createSprite(spriteRadius, canvasHeight / 2, spriteRadius * 2, canvasHeight);
    leftWall.immovable = true;
    walls.add(leftWall);

    rightWall = createSprite(canvasWidth - spriteRadius, canvasHeight / 2, spriteRadius * 2, canvasHeight);
    rightWall.immovable = true;
    walls.add(rightWall);
}

