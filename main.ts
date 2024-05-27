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
    export const BoyImage =assets.image`BoyImage`;
    export const GirlImage = assets.image`GirlImage`;

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
    playerSprite = sprites.create(customArt.BoyImage, SpriteKind.Boy);
    controller.moveSprite(playerSprite, 100, 100);
    info.setLife(3);
    scene.cameraFollowSprite(playerSprite);
}
game.splash(intro);
// playerSelection();
createPlayer();
createLevel();