namespace SpriteKind {
    export const Door = SpriteKind.create()
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
            . . b b b b . . 
            . b 8 8 8 8 b . 
            b 8 d 3 3 d 5 b 
            b 8 3 5 5 1 5 b 
            c 8 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Door)
        scene.place(value, mySprite2)
    }
    for (let value2 of scene.getTilesByType(2)) {
        scene.setTile(2, img`
            7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 
            7 7 5 7 5 5 7 7 7 7 7 7 7 7 7 7 
            7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 7 
            7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 7 
            7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, true)
    }
    for (let value3 of scene.getTilesByType(5)) {
        scene.setTile(5, img`
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, true)
    }
    for (let value4 of scene.getTilesByType(1)) {
        scene.setTile(1, img`
            7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 
            7 7 5 7 5 5 7 7 7 7 7 7 7 7 7 7 
            7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 7 
            7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 7 
            7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, false)
    }
    for (let value4 of scene.getTilesByType(1)) {
        scene.setTile(7, img`
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, false)
    }
    for (let value of scene.getTilesByType(15)) {
        scene.setTile(15, img`
            . . . . f . . . . 
            . . . f f f . . . 
            . . f c f c f . . 
            . f c a f a c f . 
            f f f f f f f f f 
            . f c a f a c f . 
            . . f c f c f . . 
            . . . f f f . . . 
            . . . . f . . . . 
            `, false)
        LUNCH = sprites.create(img`
            . . . . f . . . . 
            . . . f f f . . . 
            . . f c f c f . . 
            . f c a f a c f . 
            f f f f f f f f f 
            . f c a f a c f . 
            . . f c f c f . . 
            . . . f f f . . . 
            . . . . f . . . . 
            `, SpriteKind.Food)
        scene.place(value, LUNCH)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -350
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        if (Level == 4) {
            game.over(true)
        } else {
            info.changeScoreBy(1)
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
mySprite.ay = 350
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(6)
scene.setTileMap(img`
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
    `)
list = [img`
    ...............f.........8
    ..........................
    .........5................
    .....5...5................
    .........5..555...........
    ....5...55.......5........
    .....5............55......
    ..5..................55...
    ..5555.....f..........5552
    ........22222............2
    .....222222222122..f.....2
    .22222222222221222222....2
    222222222f111f122222f12..2
    22222222222222222222222222
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
    ..f.......................
    ..........................
    ....55...2f22........555..
    ........222222..55......55
    ..f.....2222222..5....f..8
    .......22222222..55.....57
    .......222222222..........
    .555..2222222222.....555..
    ......2222f12222..........
    ......2222211122...f......
    .....22222221122..........
    ....22222222f111..........
    ...2222222212222.........f
    22222222221222222222222222
    `]
createLevel()
