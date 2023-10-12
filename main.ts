/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program plas rock paper scissors on a Microbit
*/

let randomNumber: number = 0
let score: number 
score = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function() {
    
  randomNumber = randint(0, 2)
  basic.clearScreen()

  // If randomNumber is 0
  if (randomNumber === 0) {

      basic.showLeds(`
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .
`)
  pause(1000)
  basic.showIcon(IconNames.Happy)
  }

})

  // If randomNumber is 1
if (randomNumber === 1) {

    basic.showLeds(`
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #
`)
  pause(1000)
  basic.showIcon(IconNames.Happy)

  }

  // If randomNumber is 2
  if (randomNumber === 2) {

    basic.showIcon(IconNames.Scissors)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)

  }

  // Pause and show you are ready
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)

// On button A
input.onButtonPressed(Button.A, function() {

  score = score + 1
  basic.showIcon(IconNames.Yes)
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)

})
  
// On button B
input.onButtonPressed(Button.B, function() {

  basic.clearScreen()
  basic.showString('Score : ')
    basic.showString(score.toString())
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})