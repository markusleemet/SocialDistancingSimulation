// Unit variables
const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;
let spriteRadius = 10;
let infectedCount = 0;

//Sprites variables
let mouse;
let movingObjects;
let bullets;


function setup(){
    createCanvas(canvasWidth, canvasHeight);

    movingObjects = new Group();
    bullets = new Group();

    createSprites();
    createMouseSprite();
}

function draw() {
    background('rgba(79,231,95, 1)');
    frameRate(60);
    checkForExit()

    movingObjects.bounce(movingObjects)
    movingObjects.bounce(mouse)

    movingObjects.overlap(bullets, spriteInfected)

    // Update mouse position
    mouse.position.x = mouseX;
    mouse.position.y = mouseY;

    // Draw sprites
    drawSprites();
}

function checkForExit(){
    for(let i = 0; i < movingObjects.size(); i++) {
        let sprite = allSprites[i];
        if (sprite.position.x < 0) {
            sprite.position.x = 1;
            sprite.velocity.x = abs(sprite.velocity.x);
        }

        if (sprite.position.x > canvasWidth) {
            sprite.position.x = canvasWidth - 1;
            sprite.velocity.x = -abs(sprite.velocity.x);
        }

        if (sprite.position.y < 0) {
            sprite.position.y = 1;
            sprite.velocity.y = abs(sprite.velocity.y);
        }

        if (sprite.position.y > canvasHeight) {
            sprite.position.y = canvasHeight - 1;
            sprite.velocity.y = -abs(sprite.velocity.y);
        }
    }
}

function mousePressed(){
    let bullet = createSprite(mouseX, mouseY, spriteRadius, spriteRadius);
    bullet.addAnimation('bullet', "../static/bullet1.png", "../static/bullet1.png");
    bullet.setVelocity(random(-5, 5), random(-5, 5));
    bullet.setCollider('circle');
    bullets.add(bullet);
    bullet.life = 90;
}

function createMouseSprite(){
    console.log("Sprite for mouse created");
    mouse = createSprite(mouseX, mouseY, spriteRadius, spriteRadius);
    mouse.addAnimation("corona", "../static/corona1.png");
    mouse.setCollider('circle', 0, 0, 200);
}

function createSprites(){
    // Create moving objects
    for (let i = 0; i < numberFromUrl; i++) {
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
        movingObjects.add(sprite);
    }
}

function spriteInfected(movingObject, bullet){
    bullet.remove();
    if (movingObject.getAnimationLabel() !== "infected") {
        movingObject.changeAnimation('infected');
        infectedCount++;
        if (infectedCount === numberFromUrl) {
            console.log("Game over!")
            $("#endModal").modal();
        }
    }
}

function restart(){
    console.log("reload");
    location.reload();
}