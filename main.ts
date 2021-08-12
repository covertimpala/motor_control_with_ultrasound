let Rand_movement = 0
let Rand_time = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    while (pins.digitalReadPin(DigitalPin.P0) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    while (pins.digitalReadPin(DigitalPin.P2) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    }
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("S")
    Rand_movement = 0
    Rand_time = randint(500, 1500)
    for (let index = 0; index < 4; index++) {
        Rand_movement = randint(0, 1)
        Rand_time = 0
        if (Rand_movement == 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(Rand_time)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(Rand_time)
        }
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . . . .
            . . # . .
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
