// Unit variables
const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;
let spriteRadius = 10;

//Sprites variables
let mouse;
let sprites;
let walls;


function setup(){
    console.log("setup");
    createCanvas(canvasWidth, canvasHeight);
    sprites = new Group();
    walls = new Group();


    createSprites();
    createMouseSprite();

    //Create walls so that objects aren't able to leave canvas
    createBorders();
}

function draw() {
    background('rgba(79,231,95, 1)');
    frameRate(60);

    // Sprites bounce off other sprites and walls
    sprites.bounce(walls)
    sprites.bounce(sprites)
    sprites.bounce(mouse)

    // Update mouse position
    mouse.position.x = mouseX;
    console.log(mouseX)
    console.log(mouseY)
    mouse.position.y = mouseY;

    // Draw sprites
    drawSprites();
}

function createBorders(){
    console.log("Wall created")
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
    console.log("Sprite for mouse created");
    mouse = createSprite(mouseX, mouseY, spriteRadius, spriteRadius);
    mouse.addAnimation("corona", "../static/corona.png")
    mouse.setCollider('circle', 0, 0, 200);
}

function createSprites(){
    // Create moving objects
    for (let i = 0; i < 20; i++) {
        let sprite = createSprite(
            random(spriteRadius, canvasWidth - spriteRadius),
            random(spriteRadius, canvasHeight - spriteRadius),
            spriteRadius * 2,
            spriteRadius * 2);
        sprite.shapeColor = color(random(255), random(255), random(255));
        sprite.setVelocity(random(-5, 5), random(-5, 5));
        sprite.setCollider('rectangle', 0, 0, 100, 100);
        sprite.rotationSpeed = 1;
        sprite.addAnimation("moving", "../static/sprite1.png", "../static/sprite2.png", "../static/sprite3.png",
            "../static/sprite4.png", "../static/sprite5.png", "../static/sprite6.png", "../static/sprite5.png",
            "../static/sprite4.png","../static/sprite3.png","../static/sprite2.png","../static/sprite1.png");
        sprites.add(sprite);
    }
}
