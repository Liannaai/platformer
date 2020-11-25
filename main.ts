namespace SpriteKind {
    export const Door = SpriteKind.create()
}
function chooseLevel () {
    let list: Image[] = []
    let Level = 0
    if (Level == 0) {
        scene.setTileMap(list[Level])
        createLevel()
    } else if (Level == 1) {
        scene.setTileMap(list[Level])
    } else if (Level == 2) {
        scene.setTileMap(list[Level])
    } else {
        scene.setTileMap(list[Level])
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
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
function deleteOldLevel () {
    for (let value4 of sprites.allOfKind(SpriteKind.Player)) {
        value4.destroy()
    }
}
let mySprite2: Sprite = null
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
tiles.setTilemap(tiles.createTilemap(hex`1a000e0000000000000000000000000000000000000000000000000000000002000000010000000000000000000606000000000000000000000202020000000000060000020202030006000600010000000000000000000000060000000000000003030006000000010000000000010000000000000002020000030003030000000001010006000000000000000000000000000300000003000000000001000000000000000000020202000000030303030300000000060000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000200000000000000000000000000000001010000000000000000000000000000010000000000000001010101000000000000000000000100000101010000000101010104050101000000000000000001010001010000000001010101010101010100000000000101010101010101010101010101010101010101010101010101`, img`
    ..........................
    .2...2..........2.........
    .222........222..2.2.2....
    ......................2...
    ..2.......22..........22.2
    .......................2..
    .......222............2...
    ..........................
    .....22...................
    ..2...............22......
    ........2.......2222......
    ....2..222....222..22.....
    ...22.22....2.......2.....
    22222222222222222222222222
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile3,sprites.dungeon.hazardLava0,myTiles.tile1,myTiles.tile2,myTiles.tile5], TileScale.Sixteen))
