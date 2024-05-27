namespace SpriteKind {
    export const Boy = SpriteKind.create();
    export const Girl = SpriteKind.create();
    export const Treasure = SpriteKind.create();
    export const Goal = SpriteKind.create();
}
namespace customArt {
    export const Chest = assets.image`ChestImage`;
    export const Wall = assets.image`WallImage`;
    export const Door = assets.image`DoorImage`;
    // export const GirlImage = assets.image`GirlImage`;
    //images for boySprite animation
    // export const BoyImage =assets.image`BoyImage`;
    // export const BoyImage =assets.image`BoyImage2`;
    export const BoyImageRight1 =assets.image`BoyImageRight1`;
    export const BoyImageRight2 =assets.image`BoyImageRight2`;
    export const BoyImageRight3 =assets.image`BoyImageRight3`;
    export const BoyImageLeft1 =assets.image`BoyImageLeft1`;

    export const BoyImageLeft2 =assets.image`BoyImageLeft2`;

    export const BoyImageLeft3 =assets.image`BoyImageLeft3`;

    export const BoyImageUp1 =assets.image`BoyImageUp1`;
    export const BoyImageUp2 =assets.image`BoyImageUp2`;
    export const BoyImageUp3 =assets.image`BoyImageUp3`;
    export const BoyImageDown1 =assets.image`BoyImageDown1`;
    export const BoyImageDown2 =assets.image`BoyImageDown2`;
    export const BoyImageDown3 =assets.image`BoyImageDown3`;
    export const idle = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . f 9 9 f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . f 9 9 9 9 9 9 f f . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . . 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 d d d 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . f d 9 9 d d d d d d d 9 9 9 f . . . . . . . . .
            . . . . . . . . f d f d d f d d d f d d 9 d f . . . . . . . . .
            . . . . . . . . f d d d d f d d d f d d d d f . . . . . . . . .
            . . . . . . . . . f d d d d d d d d d d d f . . . . . . . . . .
            . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . .
            . . . . . . . . . . . f d d f f f d d f . . . . . . . . . . . .
            . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . . .
            . . . . . . . . . . . f 8 f f d f f 8 f . . . . . . . . . . . .
            . . . . . . . . . . f c c 8 8 8 8 8 c c f . . . . . . . . . . .
            . . . . . . . . . . f 8 c c c c c c c 8 f . . . . . . . . . . .
            . . . . . . . . . f d b 8 8 8 8 8 8 8 b d f . . . . . . . . . .
            . . . . . . . . . f d b c c c c c c c b d f . . . . . . . . . .
            . . . . . . . . . f d b 7 7 7 f 7 7 7 b d f . . . . . . . . . .
            . . . . . . . . . . f 7 7 7 7 f 7 7 7 7 f . . . . . . . . . . .
            . . . . . . . . . . . f f 7 7 f 7 7 f f . . . . . . . . . . . .
            . . . . . . . . . . . f c c f f f c c f . . . . . . . . . . . .
            . . . . . . . . . . f a b b f . f b b a f . . . . . . . . . . .
            . . . . . . . . . . . f f f f . f f f f . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;
}
enum ActionKind {
    Walking,
    Idle
}
namespace animation {
    controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
        let rightAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, rightAnim);
        rightAnim.addAnimationFrame(customArt.BoyImageRight1);
        rightAnim.addAnimationFrame(customArt.BoyImageRight2);
        rightAnim.addAnimationFrame(customArt.BoyImageRight3);
        animation.setAction(playerSprite, ActionKind.Walking);
    })

    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        let leftAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, leftAnim);
        leftAnim.addAnimationFrame(customArt.BoyImageLeft1);
        leftAnim.addAnimationFrame(customArt.BoyImageLeft2);
        leftAnim.addAnimationFrame(customArt.BoyImageLeft3);
        animation.setAction(playerSprite, ActionKind.Walking);
    })

    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        let upAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, upAnim);
        upAnim.addAnimationFrame(customArt.BoyImageUp1);
        upAnim.addAnimationFrame(customArt.BoyImageUp2);
        upAnim.addAnimationFrame(customArt.BoyImageUp3);
        animation.setAction(playerSprite, ActionKind.Walking);
    })

    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        let downAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, downAnim);
        downAnim.addAnimationFrame(customArt.BoyImageDown1);
        downAnim.addAnimationFrame(customArt.BoyImageDown2);
        downAnim.addAnimationFrame(customArt.BoyImageDown3);
        animation.setAction(playerSprite, ActionKind.Walking);
    })
    controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
        let idleAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, idleAnim);
        idleAnim.addAnimationFrame(customArt.idle);
        animation.setAction(playerSprite, ActionKind.Idle);
    })
}


let selectionBox: Sprite = null;
let playerSprite: Sprite = null;
let boySprite: Sprite = null;
let girlSprite: Sprite = null;
let doorSprite: Sprite = null;
let userName = game.askForString("What is your name?");
let intro = "Hello, " + userName + ", you are about to embark on an adventure!";

function createLevel() {
    // scene.setBackgroundImage(assets.image`BedroomBackground`);
    scene.setBackgroundImage(assets.image`TealBackground`);
    scene.setTileMap(assets.image`FirstTileMap`);
    scene.setTile(11, customArt.Chest, true);
    scene.setTile(12, customArt.Wall, true);
    doorSprite = sprites.create(customArt.Door, SpriteKind.Goal);
    doorSprite.setPosition(296, 8);
    // controller.moveSprite(playerSprite, 100, 100);
}
// function playerSelection() {
//     game.splash("Select a player character.");
//     scene.setBackgroundImage(assets.image`PlayerSelect`);
//     boySprite = sprites.create(assets.image`BoyHeadImage`, SpriteKind.Boy);
//     girlSprite = sprites.create(assets.image`GirlHeadImage`, SpriteKind.Girl);
//     selectionBox = sprites.create(assets.image`SelectionBoxImage`, SpriteKind.Player);
//     boySprite.setPosition(65, 65);
//     girlSprite.setPosition(95, 65);
//     selectionBox.setPosition(65, 65);
//     controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
//         selectionBox.setPosition(65, 65);
//     })
//     controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
//         selectionBox.setPosition(95, 65);
//     })
//     info.startCountdown(5);
//     info.onCountdownEnd(function () {
//         boySprite.destroy();
//         girlSprite.destroy();
//         selectionBox.destroy();
//         if (boySprite.x == selectionBox.x) {
//             playerSprite = sprites.create(assets.image`BoyImage`, SpriteKind.Boy);
//             info.stopCountdown();
//             createLevel();
//         }
//         if (girlSprite.x == selectionBox.x) {
//             playerSprite = sprites.create(assets.image`GirlImage`, SpriteKind.Girl);
//             info.stopCountdown();
//             createLevel();
//         }
//     })
// }
function createPlayer() {
    playerSprite = sprites.create(customArt.BoyImageDown2, SpriteKind.Boy);
    controller.moveSprite(playerSprite, 100, 100);
    info.setLife(3);
    scene.cameraFollowSprite(playerSprite);
}
game.splash(intro);
// playerSelection();
createPlayer();
createLevel();