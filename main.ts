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
    // export const BoyImage =assets.image`BoyImage`;
    // export const GirlImage = assets.image`GirlImage`;
    //images for boySprite animation
    export const BoyImage =assets.image`BoyImage2`;
    export const right1 = img`
        ................................
        ................................
        ................................
        ................................
        ...................ff...........
        ................fff99f..........
        .............fff999999f.........
        ............f999999999f.........
        ...........f9999999999f.........
        ..........f9999999dd99f.........
        .........f999999dddddf..........
        .........f99d9dddddddf..........
        .........f99d9dddddfdf..........
        ..........f9dddddddfddf.........
        ..........f99ddddddddf..........
        ...........fdddddddddf..........
        ............fdddddfdf...........
        .............fdddddf............
        ..............ffddf.............
        .............fcc88cf............
        .............f88cccdf...........
        ............fddf888fdf..........
        ............fdfccccfdf..........
        .............ff7777ffaf.........
        ............fb77f77f7af.........
        ............fbbf.ffcbaf.........
        .............fff..fbbf..........
        ...................ff...........
        ................................
        ................................
        ................................
        ................................
    `;
    export const right2 = img`
        ................................
        ................................
        ................................
        ................................
        ...................ff...........
        ................fff99f..........
        .............fff999999f.........
        ............f999999999f.........
        ...........f9999999999f.........
        ..........f9999999dd99f.........
        .........f99999ddddddf..........
        .........f99d9dddddddf..........
        .........f99dddddddfdf..........
        ..........f9dddddddfddf.........
        ..........f99ddddddddf..........
        ...........fdddddddddf..........
        ............fdddddfdf...........
        .............fdddddf............
        ..............ffddf.............
        .............fcc88f.............
        .............f88cccf............
        ............fddf888f............
        ............fddfcccf............
        ............fddf777f............
        .............fff777f............
        .............f7777f.............
        ..............fccfff............
        ..............fbbaaf............
        ...............ffff.............
        ................................
        ................................
        ................................
    `;
    export const right3 = img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . .
                . . . . . . . . . . . . . . . . f f f 9 9 f . . . . . . . . . .
                . . . . . . . . . . . . . f f f 9 9 9 9 9 9 f . . . . . . . . .
                . . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . . . . . .
                . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . .
                . . . . . . . . . . f 9 9 9 9 9 9 9 d d 9 9 f . . . . . . . . .
                . . . . . . . . . f 9 9 9 9 9 d d d d d d f . . . . . . . . . .
                . . . . . . . . . f 9 9 d 9 d d d d d d d f . . . . . . . . . .
                . . . . . . . . . f 9 9 d d d d d d d f d f . . . . . . . . . .
                . . . . . . . . . . f 9 9 d d d d d d f d d f . . . . . . . . .
                . . . . . . . . . . f d d d d d d d d d d f . . . . . . . . . .
                . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . .
                . . . . . . . . . . . . f d d d d d f d f . . . . . . . . . . .
                . . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . .
                . . . . . . . . . . . . . . f f d d f . . . . . . . . . . . . .
                . . . . . . . . . . . . . f 8 8 c c e e f . . . . . . . . . . .
                . . . . . . . . . . . . f f c c c 8 d f f . . . . . . . . . . .
                . . . . . . . . . . . f d f 8 8 8 f d d d f . . . . . . . . . .
                . . . . . . . . . . . f f 7 c c c f f d d f . . . . . . . . . .
                . . . . . . . . . . . . f 7 7 7 7 7 7 f f f . . . . . . . . . .
                . . . . . . . . . . . . f c 7 7 f 7 7 f 7 b f . . . . . . . . .
                . . . . . . . . . . . . f b a f . f f c b b f . . . . . . . . .
                . . . . . . . . . . . . . f f f . . f b b f . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;
    export const left1 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . f 9 9 f f f . . . . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 f f f . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 d 9 9 9 9 9 9 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d 9 d 9 9 f . . . . . . . .
            . . . . . . . . . . . f d d d d d d d 9 d 9 9 f . . . . . . . .
            . . . . . . . . . . . f d f d d d d d d d 9 9 f . . . . . . . .
            . . . . . . . . . . f d d f d d d d d d d 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d d 9 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . .
            . . . . . . . . . . . . f d f d d d d d f . . . . . . . . . . .
            . . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . .
            . . . . . . . . . . . . . . f d d f f . . . . . . . . . . . . .
            . . . . . . . . . . . . . f e 8 8 c c f . . . . . . . . . . . .
            . . . . . . . . . . . . f d c c c 8 8 f . . . . . . . . . . . .
            . . . . . . . . . . . f d f 8 8 8 f d d f . . . . . . . . . . .
            . . . . . . . . . . . f d f c c c c f d f . . . . . . . . . . .
            . . . . . . . . . . f a f f 7 7 7 7 f f . . . . . . . . . . . .
            . . . . . . . . . . f a 7 f 7 7 f 7 7 b f . . . . . . . . . . .
            . . . . . . . . . . f b b c f f . f b b f . . . . . . . . . . .
            . . . . . . . . . . . f b b f . . f f f . . . . . . . . . . . .
            . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;

    export const left2 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . f 9 9 f f f . . . . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 f f f . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . . f 9 9 d d 9 9 9 9 9 9 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d 9 9 9 9 f . . . . . . . .
            . . . . . . . . . . . f d d d d d d d 9 d 9 9 f . . . . . . . .
            . . . . . . . . . . . f d f d d d d d d d 9 9 f . . . . . . . .
            . . . . . . . . . . f d d f d d d d d d d 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d d 9 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . .
            . . . . . . . . . . . . f d f d d d d d f . . . . . . . . . . .
            . . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . .
            . . . . . . . . . . . . . . f d d f f . . . . . . . . . . . . .
            . . . . . . . . . . . . . . f 8 8 c c f . . . . . . . . . . . .
            . . . . . . . . . . . . . f c c c 8 8 f . . . . . . . . . . . .
            . . . . . . . . . . . . . f 8 8 8 f d d f . . . . . . . . . . .
            . . . . . . . . . . . . . f c c c f d d f . . . . . . . . . . .
            . . . . . . . . . . . . . f 7 7 7 f d d f . . . . . . . . . . .
            . . . . . . . . . . . . . f 7 7 7 f f f . . . . . . . . . . . .
            . . . . . . . . . . . . . . f 7 7 7 7 f . . . . . . . . . . . .
            . . . . . . . . . . . . . f f f c c f . . . . . . . . . . . . .
            . . . . . . . . . . . . . f a a b b f . . . . . . . . . . . . .
            . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;

    export const left3 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . f 9 9 f f f . . . . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 f f f . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . . f 9 9 d d 9 9 9 9 9 9 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d 9 9 9 9 9 f . . . . . . . .
            . . . . . . . . . . . f d d d d d d d 9 d 9 9 f . . . . . . . .
            . . . . . . . . . . . f d f d d d d d d d 9 9 f . . . . . . . .
            . . . . . . . . . . f d d f d d d d d d d 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d d 9 9 f . . . . . . . . .
            . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . .
            . . . . . . . . . . . . f d f d d d d d f . . . . . . . . . . .
            . . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . .
            . . . . . . . . . . . . . . f d d f f . . . . . . . . . . . . .
            . . . . . . . . . . . . f 7 7 c c 8 8 f . . . . . . . . . . . .
            . . . . . . . . . . . . f f d 8 c c c f f . . . . . . . . . . .
            . . . . . . . . . . . f d d d f 8 8 8 f d f . . . . . . . . . .
            . . . . . . . . . . . f d d f f c c c 6 f f . . . . . . . . . .
            . . . . . . . . . . . f f f 6 6 6 6 6 6 f . . . . . . . . . . .
            . . . . . . . . . . f b 7 f 6 6 f 7 6 c f . . . . . . . . . . .
            . . . . . . . . . . f b b c f f . f a b f . . . . . . . . . . .
            . . . . . . . . . . . f b b f . . f f f . . . . . . . . . . . .
            . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;

    export const up1 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . .
            . . . . . . . . . . . . . . f f f 9 9 f . . . . . . . . . . . .
            . . . . . . . . . . . . f f 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . . . f 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . f f 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . f f 9 9 9 9 9 9 9 9 9 9 9 f f . . . . . . . . .
            . . . . . . . . f d 9 9 9 9 9 9 9 9 9 9 9 d f . . . . . . . . .
            . . . . . . . . f d 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f d 9 9 9 9 9 9 9 9 9 d f . . . . . . . . . .
            . . . . . . . . . f f d 9 9 9 9 9 9 9 d f f . . . . . . . . . .
            . . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . .
            . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . . .
            . . . . . . . . . . . f 8 f f f f f 8 f . . . . . . . . . . . .
            . . . . . . . . . . f c c 8 8 8 8 8 c c f . . . . . . . . . . .
            . . . . . . . . . f d 8 c c c c c c c 8 d f . . . . . . . . . .
            . . . . . . . . f d d 8 8 8 8 8 8 8 8 8 d f . . . . . . . . . .
            . . . . . . . . f d d f c c c c c c c c d f . . . . . . . . . .
            . . . . . . . . . f f f 7 7 7 7 7 7 7 f d f . . . . . . . . . .
            . . . . . . . . . . f f 7 7 7 7 7 7 7 f f . . . . . . . . . . .
            . . . . . . . . . . f b f 7 7 f 7 7 f . . . . . . . . . . . . .
            . . . . . . . . . . . f b b f f f c c f f . . . . . . . . . . .
            . . . . . . . . . . . . f f . . f b b a f . . . . . . . . . . .
            . . . . . . . . . . . . . . . . f f f f . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;
    export const up2 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . .
            . . . . . . . . . . . . . f f f 9 9 f . . . . . . . . . . . . .
            . . . . . . . . . . . f f 9 9 9 9 9 9 f . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 f . . . . . . . . . . . .
            . . . . . . . . f f 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . f f 9 9 9 9 9 9 9 9 9 9 9 f f . . . . . . . . . .
            . . . . . . . f d 9 9 9 9 9 9 9 9 9 9 9 d f . . . . . . . . . .
            . . . . . . . f d 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . f d 9 9 9 9 9 9 9 9 9 d f . . . . . . . . . . .
            . . . . . . . . f f d 9 9 9 9 9 9 9 d f f . . . . . . . . . . .
            . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . . .
            . . . . . . . . . . . f d d d d d f . . . . . . . . . . . . . .
            . . . . . . . . . . f 8 f f f f f 8 f . . . . . . . . . . . . .
            . . . . . . . . . f c c 8 8 8 8 8 c c f . . . . . . . . . . . .
            . . . . . . . . . f 8 c c c c c c c 8 f . . . . . . . . . . . .
            . . . . . . . . f d 8 8 8 8 8 8 8 8 8 d f . . . . . . . . . . .
            . . . . . . . . f d c c c c c c c c c d f . . . . . . . . . . .
            . . . . . . . . f d f 7 7 7 7 7 7 7 f d f . . . . . . . . . . .
            . . . . . . . . . f f 7 7 7 7 7 7 7 f f . . . . . . . . . . . .
            . . . . . . . . . . . f 7 7 f 7 7 f . . . . . . . . . . . . . .
            . . . . . . . . . f f c c f f f c c f f . . . . . . . . . . . .
            . . . . . . . . . f a b b f . f b b a f . . . . . . . . . . . .
            . . . . . . . . . . f f f f . f f f f . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;
    export const up3 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . f 9 9 f f f . . . . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 f f . . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 f . . . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 f f . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . f f 9 9 9 9 9 9 9 9 9 9 9 f f . . . . . . . . .
            . . . . . . . . f d 9 9 9 9 9 9 9 9 9 9 9 d f . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 d f . . . . . . . . .
            . . . . . . . . . f d 9 9 9 9 9 9 9 9 9 d f . . . . . . . . . .
            . . . . . . . . . f f d 9 9 9 9 9 9 9 d f f . . . . . . . . . .
            . . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . .
            . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . . .
            . . . . . . . . . . . f 8 f f f f f 8 f . . . . . . . . . . . .
            . . . . . . . . . . f c c 8 8 8 8 8 c c f . . . . . . . . . . .
            . . . . . . . . . f d 8 c c c c c c c 8 d f . . . . . . . . . .
            . . . . . . . . . f d 8 8 8 8 8 8 8 8 8 d d f . . . . . . . . .
            . . . . . . . . . f d c c c c c c c c f d d f . . . . . . . . .
            . . . . . . . . . f d f 7 7 7 7 7 7 7 f f f . . . . . . . . . .
            . . . . . . . . . . f f 7 7 7 7 7 7 7 f f . . . . . . . . . . .
            . . . . . . . . . . . . f 7 7 f 7 7 f b f . . . . . . . . . . .
            . . . . . . . . . . f f c c f f f b b f . . . . . . . . . . . .
            . . . . . . . . . . f a b b f . . f f . . . . . . . . . . . . .
            . . . . . . . . . . . f f f f . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;
    export const down1 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . f 9 9 f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . f 9 9 9 9 9 9 f f . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 9 d d 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . f d 9 9 d d d d d d d 9 9 9 f . . . . . . . . .
            . . . . . . . . f d f d d f d d d f d d 9 d f . . . . . . . . .
            . . . . . . . . f d d d d f d d d f d d d d f . . . . . . . . .
            . . . . . . . . . f d d d d d d d d d d d f . . . . . . . . . .
            . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . .
            . . . . . . . . . . . f d d f f f d d f . . . . . . . . . . . .
            . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . . .
            . . . . . . . . . . . f 8 f f d f f 8 f . . . . . . . . . . . .
            . . . . . . . . . . f c 8 8 8 8 8 8 c c f . . . . . . . . . . .
            . . . . . . . . . . f d c c c c c c c 8 f . . . . . . . . . . .
            . . . . . . . . . . f d 8 8 8 8 8 8 f d f . . . . . . . . . . .
            . . . . . . . . . . f d c c c c c f d d f . . . . . . . . . . .
            . . . . . . . . . . . f 7 7 7 f 7 f d d f . . . . . . . . . . .
            . . . . . . . . . . . f 7 7 f f 7 7 7 f . . . . . . . . . . . .
            . . . . . . . . . f f f 7 7 f f 7 7 f f . . . . . . . . . . . .
            . . . . . . . . . f a c c 7 f f f 7 7 f . . . . . . . . . . . .
            . . . . . . . . . . f b b f . . f b b a f . . . . . . . . . . .
            . . . . . . . . . . . f f . . . f f f f . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;
    export const down2 = img`
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
    export const down3 = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
            . . . . . . . . . . . f f f f 9 9 f f . . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 f . . . . . . . . . . . .
            . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . .
            . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 . . . . . . . . . . .
            . . . . . . . . . f 9 9 9 d d 9 9 9 9 9 9 f . . . . . . . . . .
            . . . . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . . . . . .
            . . . . . . . . f d 9 d d d d d d d d 9 9 d f . . . . . . . . .
            . . . . . . . . f d f d d f d d d f d d f d f . . . . . . . . .
            . . . . . . . . f d d d d f d d d f d d d d f . . . . . . . . .
            . . . . . . . . . f d d d d d d d d d d d f . . . . . . . . . .
            . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . .
            . . . . . . . . . . . f d d f f f d d f . . . . . . . . . . . .
            . . . . . . . . . . . . f d d d d d f . . . . . . . . . . . . .
            . . . . . . . . . . . f 8 f f d f f 8 f . . . . . . . . . . . .
            . . . . . . . . . . f c c 8 8 8 8 8 8 c f . . . . . . . . . . .
            . . . . . . . . . . f 8 c c c c c c c d f . . . . . . . . . . .
            . . . . . . . . . . f d f 8 8 8 8 8 8 d f . . . . . . . . . . .
            . . . . . . . . . . f d d f c c c c c d f . . . . . . . . . . .
            . . . . . . . . . . f d d f 7 f 7 7 7 f . . . . . . . . . . . .
            . . . . . . . . . . . f 7 7 7 f f 7 7 f . . . . . . . . . . . .
            . . . . . . . . . . . f f 7 7 f f 7 7 f f f . . . . . . . . . .
            . . . . . . . . . . . f 7 7 f f f 7 c c a f . . . . . . . . . .
            . . . . . . . . . . f a b b f . . f b b f . . . . . . . . . . .
            . . . . . . . . . . . f f f f . . . f f . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `;
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
        rightAnim.addAnimationFrame(customArt.right1);
        rightAnim.addAnimationFrame(customArt.right2);
        rightAnim.addAnimationFrame(customArt.right3);
        animation.setAction(playerSprite, ActionKind.Walking);
    })

    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        let leftAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, leftAnim);
        leftAnim.addAnimationFrame(customArt.left1);
        leftAnim.addAnimationFrame(customArt.left2);
        leftAnim.addAnimationFrame(customArt.left3);
        animation.setAction(playerSprite, ActionKind.Walking);
    })

    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        let upAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, upAnim);
        upAnim.addAnimationFrame(customArt.up1);
        upAnim.addAnimationFrame(customArt.up2);
        upAnim.addAnimationFrame(customArt.up3);
        animation.setAction(playerSprite, ActionKind.Walking);
    })

    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        let downAnim = animation.createAnimation(0, 150);
        animation.attachAnimation(playerSprite, downAnim);
        downAnim.addAnimationFrame(customArt.down1);
        downAnim.addAnimationFrame(customArt.down2);
        downAnim.addAnimationFrame(customArt.down3);
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
    playerSprite = sprites.create(customArt.BoyImage, SpriteKind.Boy);
    controller.moveSprite(playerSprite, 100, 100);
    info.setLife(3);
    scene.cameraFollowSprite(playerSprite);
}
game.splash(intro);
// playerSelection();
createPlayer();
createLevel();