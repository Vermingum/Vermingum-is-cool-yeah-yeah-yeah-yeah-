def on_button_pressed_a():
    basic.show_leds("""
        . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)
    basic.pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global password
    if True:
        basic.pause(5000)
    if True:
        password = 1
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    basic.show_string("¿¡ERROR!")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

password = 0
basic.show_string("Hello World")
basic.pause(2500)
basic.clear_screen()

def on_forever():
    pass
basic.forever(on_forever)
