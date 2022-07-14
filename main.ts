input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        basic.pause(5000)
    }
    if (true) {
        password = 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showString("I'm sad")
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (password == 1) {
        basic.showString("Vermingum is cool!")
    } else {
        basic.showString("¿¡ERROR!")
        basic.pause(1)
        basic.clearScreen()
    }
})
let password = 0
password = 0
basic.showString("Hello World")
basic.pause(2500)
basic.clearScreen()
basic.forever(function () {
	
})
