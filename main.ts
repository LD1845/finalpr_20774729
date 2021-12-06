namespace SpriteKind {
    export const waterm = SpriteKind.create()
    export const grass = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    current_level += 1
    startLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (placeholderMC.vy == 0) {
        placeholderMC.vy = -180
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.waterm, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false, effects.splatter)
})
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level2`)
    } else {
        game.over(true, effects.confetti)
    }
    placeholderMC.ay = 390
    scene.cameraFollowSprite(placeholderMC)
    info.setLife(5)
    tiles.placeOnRandomTile(placeholderMC, assets.tile`myTile9`)
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        waterm = sprites.create(img`
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 f 2 2 2 . . . . 
            . . . . . 2 2 2 f 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 5 2 2 2 5 f 2 2 . . 
            . . . 2 2 2 f 2 2 2 2 f 2 2 . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 f 2 2 2 2 2 2 2 2 5 f 2 . 
            . 6 2 2 2 5 2 2 2 2 2 2 5 f 2 6 
            . 6 7 2 2 2 2 2 2 2 2 2 2 2 7 6 
            . . 6 7 7 2 2 2 2 2 2 2 7 7 6 . 
            . . . 6 7 7 7 7 7 7 7 7 7 6 . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            `, SpriteKind.waterm)
        animation.runImageAnimation(
        waterm,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 f 2 5 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 f 5 2 2 2 2 . . . . . 
            . . . 2 2 2 5 2 f 2 2 2 . . . . 
            . . . 2 f 2 2 2 2 2 5 f . . . . 
            . . 2 2 2 2 2 2 2 2 5 2 2 . . . 
            . . 7 1 2 2 2 5 f 2 2 7 7 . . . 
            . 6 7 7 1 2 2 2 2 2 7 7 7 6 . . 
            . 6 6 7 7 7 7 7 7 7 7 7 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 f 2 5 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 f 5 2 2 2 2 . . . . . 
            . . . 2 2 2 5 2 f 2 2 2 . . . . 
            . . . 2 f 2 2 2 2 2 5 f . . . . 
            . . 2 2 2 2 2 2 2 2 5 2 2 . . . 
            . . 7 1 2 2 2 5 f 2 2 7 7 . . . 
            . 6 7 7 1 2 2 2 2 2 7 7 7 6 . . 
            . 6 6 7 7 7 7 7 7 7 7 7 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 f 2 5 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 f 5 2 2 2 2 . . . . . 
            . . . 2 2 2 5 2 f 2 2 2 . . . . 
            . . . 2 f 2 2 2 2 2 5 f . . . . 
            . . 2 2 2 2 2 2 2 2 5 2 2 . . . 
            . . 7 1 2 2 2 5 f 2 2 7 7 . . . 
            . 6 7 7 1 2 2 2 2 2 7 7 7 6 . . 
            . 6 6 7 7 7 7 7 7 7 7 7 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 f 2 5 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 f 5 2 2 2 2 . . . . . 
            . . . 2 2 2 5 2 f 2 2 2 . . . . 
            . . . 2 f 2 2 2 2 2 5 f . . . . 
            . . 2 2 2 2 2 2 2 2 5 2 2 . . . 
            . . 7 1 2 2 2 5 f 2 2 7 7 . . . 
            . 6 7 7 1 2 2 2 2 2 7 7 7 6 . . 
            . 6 6 7 7 7 7 7 7 7 7 7 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . . . . . . . . . . . . . . 
            `],
        350,
        true
        )
        tiles.placeOnTile(waterm, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        fire = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 2 . . . . . . 
            . . . . . 1 . . 1 2 . . . . . . 
            . . . . . 2 . . 1 2 . . . . . . 
            . . . . . 2 4 2 1 2 . 1 2 . . . 
            . . . . 2 2 4 4 2 2 2 2 2 . . . 
            . . . . 2 2 4 4 4 2 2 2 2 . . . 
            . . . . 2 4 5 4 4 1 2 2 2 . . . 
            . . . . 2 5 5 5 5 4 1 1 2 . . . 
            . . . 1 2 5 5 5 5 4 4 4 2 . . . 
            . . . 1 2 1 5 5 5 5 5 4 2 . . . 
            . . . 2 2 1 5 5 5 5 5 4 2 . . . 
            . . . . 2 1 4 5 5 5 4 4 2 . . . 
            . . . . 2 4 4 4 4 4 4 2 . . . . 
            . . . . 2 2 4 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(fire, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        fire,
        [img`
            . . . . . . . . 2 . . . . . . . 
            . . . . 1 . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 2 . . . 1 . . . 
            . . . . 2 . 2 4 2 . . . 2 . . . 
            . . . . 2 2 2 4 2 2 . 2 2 . . . 
            . . . . 2 4 4 4 4 1 2 2 2 . . . 
            . . . 1 2 4 5 4 4 4 1 1 2 . . . 
            . . . 2 4 4 5 5 4 5 4 1 2 . . . 
            . . . 2 4 5 5 5 5 5 4 1 2 . . . 
            . . . 2 4 1 5 5 5 5 4 2 2 . . . 
            . . . 2 4 1 5 5 5 5 4 4 2 . . . 
            . . . 2 2 4 1 5 5 4 4 2 . . . . 
            . . . . 2 4 2 4 4 4 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . 1 . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 2 . . . 1 . . . 
            . . . . 2 . 2 4 2 . . . 2 . . . 
            . . . . 2 2 2 4 2 2 . 2 2 . . . 
            . . . . 2 4 4 4 4 1 2 2 2 . . . 
            . . . 1 2 4 5 4 4 4 1 1 2 . . . 
            . . . 2 4 4 5 5 4 5 4 1 2 . . . 
            . . . 2 4 5 5 5 5 5 4 1 2 . . . 
            . . . 2 4 1 5 5 5 5 4 2 2 . . . 
            . . . 2 4 1 5 5 5 5 4 4 2 . . . 
            . . . 2 2 4 1 5 5 4 4 2 . . . . 
            . . . . 2 4 2 4 4 4 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . 1 . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 2 . . . 1 . . . 
            . . . . 2 . 2 4 2 . . . 2 . . . 
            . . . . 2 2 2 4 2 2 . 2 2 . . . 
            . . . . 2 4 4 4 4 1 2 2 2 . . . 
            . . . 1 2 4 5 4 4 4 1 1 2 . . . 
            . . . 2 4 4 5 5 4 5 4 1 2 . . . 
            . . . 2 4 5 5 5 5 5 4 1 2 . . . 
            . . . 2 4 1 5 5 5 5 4 2 2 . . . 
            . . . 2 4 1 5 5 5 5 4 4 2 . . . 
            . . . 2 2 4 1 5 5 4 4 2 . . . . 
            . . . . 2 4 2 4 4 4 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . 1 . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 2 . . . 1 . . . 
            . . . . 2 . 2 4 2 . . . 2 . . . 
            . . . . 2 2 2 4 2 2 . 2 2 . . . 
            . . . . 2 4 4 4 4 1 2 2 2 . . . 
            . . . 1 2 4 5 4 4 4 1 1 2 . . . 
            . . . 2 4 4 5 5 4 5 4 1 2 . . . 
            . . . 2 4 5 5 5 5 5 4 1 2 . . . 
            . . . 2 4 1 5 5 5 5 4 2 2 . . . 
            . . . 2 4 1 5 5 5 5 4 4 2 . . . 
            . . . 2 2 4 1 5 5 4 4 2 . . . . 
            . . . . 2 4 2 4 4 4 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . 2 . . . . . . . 
            . . . . 1 . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 2 . . . 1 . . . 
            . . . . 2 . 2 4 2 . . . 2 . . . 
            . . . . 2 2 2 4 2 2 . 2 2 . . . 
            . . . . 2 4 4 4 4 1 2 2 2 . . . 
            . . . 1 2 4 5 4 4 4 1 1 2 . . . 
            . . . 2 4 4 5 5 4 5 4 1 2 . . . 
            . . . 2 4 5 5 5 5 5 4 1 2 . . . 
            . . . 2 4 1 5 5 5 5 4 2 2 . . . 
            . . . 2 4 1 5 5 5 5 4 4 2 . . . 
            . . . 2 2 4 1 5 5 4 4 2 . . . . 
            . . . . 2 4 2 4 4 4 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        400,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let fire: Sprite = null
let waterm: Sprite = null
let current_level = 0
let placeholderMC: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`BG1`)
placeholderMC = sprites.create(img`
    . . . . . e e e e e e e . . . . 
    . . e e e e e e e e e e e e e . 
    . e e 5 e f 1 e e e f 1 e 5 e e 
    . e 5 5 e f f d d d f f e 5 5 e 
    . e 5 5 e d d d d d d d e 5 5 e 
    . e 5 5 d d d d f d d d d 5 5 e 
    . e e 5 c d d f 3 f d d c 5 e e 
    . . e e d f f 3 3 3 f f d e e . 
    . . . . . d d d d d d d . . . . 
    . . . . f f e e e e e f f . . . 
    . . . f e e f d d d f e e f . . 
    . . . . f e e f d f e e f . . . 
    . . . . e f f d d d f f e . . . 
    . . . . e e d d d d d e e . . . 
    . . . 5 5 5 e d d d e 5 5 5 . . 
    . . . 5 5 5 5 e e e 5 5 5 5 . . 
    `, SpriteKind.Player)
controller.moveSprite(placeholderMC, 89, 0)
current_level = 0
startLevel()
game.onUpdate(function () {
    placeholderMC.setImage(img`
        . . . . . e e e e e e e . . . . 
        . . e e e e e e e e e e e e e . 
        . e e 5 e f 1 e e e f 1 e 5 e e 
        . e 5 5 e f f d d d f f e 5 5 e 
        . e 5 5 e d d d d d d d e 5 5 e 
        . e 5 5 d d d d f d d d d 5 5 e 
        . e e 5 c d d f 3 f d d c 5 e e 
        . . e e d f f 3 3 3 f f d e e . 
        . . . . . d d d d d d d . . . . 
        . . . . f f e e e e e f f . . . 
        . . . f e e f d d d f e e f . . 
        . . . . f e e f d f e e f . . . 
        . . . . e f f d d d f f e . . . 
        . . . . e e d d d d d e e . . . 
        . . . 5 5 e e d d d e e 5 5 . . 
        . . . 5 5 5 e e e e e 5 5 5 . . 
        `)
    if (placeholderMC.vx < 0) {
        placeholderMC.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e e . . . . . . . . 
            e e e e e e e e e . . . e e . . 
            e 1 f e e e 5 5 e e . e e e e . 
            e f f e e e 5 5 5 e . e e e e e 
            d d d d e e 5 5 5 e . e e . e e 
            f d d f d e 5 5 e e . e . . e e 
            3 f f d d d e e e . . . . e e e 
            d d d d d d e e e e e e e e e . 
            . e e e e e e e e e e e e e . . 
            . c e d d d c e e e e e e . . . 
            c e e d d c e e d d e e e . . . 
            c e c e d c e c d d d e e . . . 
            c e c . e c e c d d d e e . . . 
            c c . . . c c 5 5 e e 5 5 . . . 
            . . . . . . 5 5 5 . 5 5 5 . . . 
            `)
    } else if (placeholderMC.vx > 0) {
        placeholderMC.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e e . . . . . . 
            . . e e . . . e e e e e e e e e 
            . e e e e . e e 5 5 e e e f 1 e 
            e e e e e . e 5 5 5 e e e f f e 
            e e . e e . e 5 5 5 e e d d d d 
            e e . . e . e e 5 5 e d f d d f 
            e e e . . . . e e e d d d f f 3 
            . e e e e e e e e e d d d d d d 
            . . e e e e e e e e e e e e e . 
            . . . e e e e e e c d d d e c . 
            . . . e e e d d e e c d d e e c 
            . . . e e d d d c e c d e c e c 
            . . . e e d d d c e c e . c e c 
            . . . 5 5 e e 5 5 c c . . . c c 
            . . . 5 5 5 . 5 5 5 . . . . . . 
            `)
    } else {
    	
    }
    if (placeholderMC.vy < 0) {
        placeholderMC.setImage(img`
            . . . . . . . . e e . . . . . . 
            . . e e . . . e e e e e e e e e 
            . e e e e . e e 5 5 e e e f 1 e 
            e e e e e . e 5 5 5 e e e f f e 
            e e . e e . e 5 5 5 e e d d d d 
            e e . . e . e e 5 5 e d f d d f 
            e e e . . . . e e e d d d f f 3 
            . e e e e e e e e e d d d d d d 
            . . e e e e e e e e e e e e e . 
            . . . e e e e e e e e d c e c . 
            . . . e e e d d c e c d c e c . 
            . . . e e d d d c e c e e c . . 
            . . . e e d d d d c e e . . . . 
            . . . 5 5 e 5 5 e e . . . . . . 
            . . . 5 5 . 5 5 . . . . . . . . 
            . . . 5 . . 5 . . . . . . . . . 
            `)
    } else if (placeholderMC.vy > 0) {
        placeholderMC.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e e . . . . . . 
            . . e e . . . e e e e e e e e e 
            . e e e e . e e 5 5 e e e f 1 e 
            e e e e e . e 5 5 5 e e e f f e 
            e e . e e . e 5 5 5 e e d d d d 
            e e . . e . e e 5 5 e d f d d f 
            e e e . . . . e e e d d d f f 3 
            . e e e . . e e e e d d d d d d 
            . . e e e e e e e e e e e . . . 
            . . . e e e e d e e c e e c . . 
            . . . e e e d d c e e c e e c . 
            . . . e e d d d d c c f c c c . 
            . . . 5 5 d d 5 5 e . . . . . . 
            . . . 5 5 5 e 5 5 5 . . . . . . 
            . . . . 5 5 . . 5 5 . . . . . . 
            `)
    } else {
    	
    }
})
