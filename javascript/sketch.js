let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let numberOfSprites = 20;
let spriteRadius = 10;
let mouse;

var sprites;
var walls;

function setup(){
    console.log("setup");
    createCanvas(canvasWidth, canvasHeight);
    sprites = new Group();
    walls = new Group();
    mouse = createMouseSprite()

    // Create moving objects
    for (let i = 0; i < numberOfSprites; i++) {
        let sprite = createSprite(
            random(spriteRadius, canvasWidth - spriteRadius),
            random(spriteRadius, canvasHeight - spriteRadius),
            spriteRadius * 2,
            spriteRadius * 2);
        sprite.shapeColor = color(random(255), random(255), random(255));
        sprite.setVelocity(random(-5, 5), random(-5, 5));
        sprite.setCollider('rectangle', 0, 0, 50, 50);
        sprites.add(sprite);
    }

    //Create walls so that objects aren't able to leave canvas
    createBorders()
}

function draw() {
    background('#4fe75f');
    frameRate(60);
    sprites.bounce(walls)
    sprites.bounce(mouse, function(){
        this.setVelocity(random(-5, 5), random(-5, 5));
    })
    sprites.bounce(sprites)
    drawSprites(sprites);
    drawSprites(walls);
    drawSprites(mouse);
    mouse.position.x = mouseX;
    mouse.position.y = mouseY;
}

function createBorders(){
    topWall = createSprite(canvasWidth / 2, 1, canvasWidth, 2);
    topWall.immovable = true;
    topWall.setCollider('rectangle')
    walls.add(topWall);

    bottomWall = createSprite(canvasWidth / 2, canvasHeight - 1,  canvasWidth, 2);
    bottomWall.immovable = true;
    bottomWall.setCollider('rectangle')
    walls.add(bottomWall);

    leftWall = createSprite(1, canvasHeight / 2, 2, canvasHeight);
    leftWall.immovable = true;
    leftWall.setCollider('rectangle')
    walls.add(leftWall);

    rightWall = createSprite(canvasWidth - 1, canvasHeight / 2, 2, canvasHeight);
    rightWall.immovable = true;
    rightWall.setCollider('rectangle')
    walls.add(rightWall);
}

function createMouseSprite(){
    let sprite = createSprite(mouseX, mouseY, spriteRadius, spriteRadius);
    sprite.visible = false;
    sprite.setCollider('circle', 0, 0, 200);
    return sprite;
}
