namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const OP = SpriteKind.create()
}
function chooseLevel () {
    if (Level == 0) {
        scene.setTileMap(list[Level])
        createLevel()
    } else if (Level == 1) {
        deleteOldLevel()
        scene.setTileMap(list[Level])
        createLevel()
    } else {
        deleteOldLevel()
        scene.setTileMap(list[Level])
        createLevel()
    }
}
function createLevel () {
    for (let value of scene.getTilesByType(8)) {
        scene.setTile(8, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        mySprite2 = sprites.create(img`
            . . 5 5 5 5 . . 
            . 5 2 2 2 2 5 . 
            5 2 d 4 4 d 5 5 
            5 2 4 2 2 5 5 5 
            4 2 4 2 2 5 2 4 
            4 2 2 5 5 2 2 4 
            . 4 2 2 2 2 4 . 
            . . 4 4 4 4 . . 
            `, SpriteKind.Door)
        scene.place(value, mySprite2)
    }
    for (let value of scene.getTilesByType(15)) {
        scene.setTile(15, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, false)
        LUNCH = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value, LUNCH)
    }
    for (let value of scene.getTilesByType(3)) {
        scene.setTile(3, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, false)
        Chest = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.OP)
        scene.place(value, Chest)
    }
    for (let value5 of scene.getTilesByType(1)) {
        scene.setTile(1, img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 2 5 4 4 4 4 4 4 5 
            5 5 5 5 5 5 2 5 5 5 5 5 5 5 4 5 
            5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 4 4 2 2 2 2 2 2 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, false)
    }
    for (let value2 of scene.getTilesByType(2)) {
        scene.setTile(2, img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 5 5 4 4 4 4 4 4 5 
            5 2 2 2 2 2 2 2 5 4 4 4 4 4 4 5 
            5 5 5 5 5 5 2 5 5 5 5 5 5 5 4 5 
            5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 5 4 2 2 2 2 2 2 5 
            5 4 4 4 4 4 4 4 4 2 2 2 2 2 2 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, true)
    }
    for (let value3 of scene.getTilesByType(5)) {
        scene.setTile(5, img`
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, true)
    }
    for (let value4 of scene.getTilesByType(7)) {
        scene.setTile(7, img`
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.OP, function (sprite, otherSprite) {
    Chest = sprites.create(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.OP)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        if (Level == 2) {
            game.over(true)
        } else {
            Level += 1
            mySprite.setPosition(30, 80)
            chooseLevel()
        }
    }
})
function deleteOldLevel () {
    for (let value4 of sprites.allOfKind(SpriteKind.Door)) {
        value4.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let Chest: Sprite = null
let LUNCH: Sprite = null
let mySprite2: Sprite = null
let Level = 0
let list: Image[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(32, 94)
mySprite.ay = 200
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(6)
list = [img`
    ..........................
    .....................f....
    ..555555.....555555......8
    ..555.....................
    ..5.......................
    ..5......555...f..5555....
    .......55............5....
    ......55..........55......
    ..................5......5
    .............222..........
    ..55555......2222.........
    ...........222222.........
    .........2222f1111........
    2222222222222222222222222f
    `, img`
    ..........................
    ...f......................
    .........55........f......
    .............55...........
    .......55............57...
    ...............55...558...
    ....55....2..........55...
    .........222......55.....f
    ..55....2222..f...........
    .......2221..........555..
    ......22211222............
    .....222f122222.....2.....
    ....222222222222...2...2..
    22222222222222222222222222
    `, img`
    8..............f..........
    ..........................
    .........5................
    .....5...5............f...
    .........5..555...........
    ....5...55.......5........
    .....5............55......
    ..5..................55...
    ..5555.....f..........5552
    ........22222............2
    .....222222221122..f.....2
    .22222222222221222222....2
    222222222f111f122222f12..2
    22222222222222222222222222
    `]
chooseLevel()
