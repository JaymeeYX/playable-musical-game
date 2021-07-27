input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        # # # # #
        . # . . .
        `)
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("PRESS LOGO TO PLAY!")
    basic.showString("PAUSE")
    basic.showString("PAUSE")
    basic.clearScreen()
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        . # . . .
        # # # # #
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # . . . .
        # # # # #
        # . . . .
        `)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        # # # # #
        . # . . .
        `)
    music.playTone(587, music.beat(BeatFraction.Double))
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        # # # # #
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # # # # #
        # . . . .
        `)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . # .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        # # # # #
        . . . # .
        `)
    music.playTone(698, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . # . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . # . # .
        . # . . .
        # # # # #
        . # . . .
        `)
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        # # # # #
        . . . # .
        `)
    music.playTone(698, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        # # # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . . . # .
        # # # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . # .
        . . . # #
        . . . . #
        # # # # #
        . . . . #
        `)
    music.playTone(784, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        # # # # #
        . . . # .
        `)
    music.playTone(698, music.beat(BeatFraction.Double))
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        # # # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        `)
    music.playTone(659, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        # # # # #
        . . # . .
        `)
    basic.showIcon(IconNames.No)
    basic.showString("TRY AGAIN")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        # # # # #
        . . . . #
        `)
    music.playTone(784, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    # # # # #
    . . # . .
    `)
