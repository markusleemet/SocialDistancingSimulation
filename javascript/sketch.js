// Unit variables
const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;
let spriteRadius = 10;

//Sprites variables
let mouse;
let sprites;
let walls;
let bullets;


function setup(){
    console.log("setup");
    createCanvas(canvasWidth, canvasHeight);
    sprites = new Group();
    walls = new Group();
    bullets = new Group();


    createSprites();
    createMouseSprite();
    createBorders();
}

function draw() {
    background('rgba(79,231,95, 1)');
    frameRate(60);

    // Sprites bounce off other sprites and walls
    sprites.bounce(walls)
    sprites.bounce(sprites)
    sprites.bounce(mouse)

    sprites.overlap(bullets,  function(){
        this.changeAnimation('infected');
    })

    // Update mouse position
    mouse.position.x = mouseX;
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

function mousePressed(){
    let bullet = createSprite(mouseX, mouseY, spriteRadius, spriteRadius);
    bullet.addAnimation('bullet', "../static/bullet1.png", "../static/bullet1.png");
    bullet.setVelocity(random(-5, 5), random(-5, 5));
    bullet.setCollider('circle');
    bullets.add(bullet);
    bullet.life = 120;
}

function createMouseSprite(){
    console.log("Sprite for mouse created");
    mouse = createSprite(mouseX, mouseY, spriteRadius, spriteRadius);
    mouse.addAnimation("corona", "../static/corona1.png");
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
        sprite.setVelocity(random(-5, 5), random(-5, 5));
        sprite.setCollider('rectangle', 0, 0, 100, 100);
        sprite.rotationSpeed = 1;
        sprite.addAnimation("moving", "../static/sprite1.png", "../static/sprite2.png", "../static/sprite3.png",
            "../static/sprite4.png", "../static/sprite5.png", "../static/sprite6.png", "../static/sprite5.png",
            "../static/sprite4.png","../static/sprite3.png","../static/sprite2.png","../static/sprite1.png");
        sprite.addAnimation('infected', "../static/infected1.png", "../static/infected2.png");
        sprites.add(sprite);
    }
}
