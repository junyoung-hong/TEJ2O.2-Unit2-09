/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Mar 2026
 * This program do rock, paper , sissor.
*/

// variables
let randomNumber: number = 0
let score: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shake the microbit
input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 1)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }

    //if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // pasue and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// press A
    input.onButtonPressed(Button.A, function() {
        score += 1
    })

// press B
    input.onButtonPressed(Button.B, function() {
        basic.clearScreen()
        basic.showString(score.toString())    
        
    })
   