input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    for (let index = 0; index < 4; index++) {
        music.playMelody("A - C5 C G - E - ", 500)
    }
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    for (let index = 0; index < 4; index++) {
        music.playMelody("- B C5 E G - C B ", 500)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    basic.pause(1000)
    basic.clearScreen()
})
