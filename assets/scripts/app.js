'use strict'

// all the requires goes here.
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // js event handlers

  // hide events goes here ...
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#game-controls').hide()
  $('.view-header-image').hide()
  $('#winner-message').hide()
  $('.change-password-container').hide()
  $('.sign-in-message').hide()

  // other events goes here ...
  // create a new account, so that the user will be able to access the game.
  $('#create-account').on('submit', authEvents.onSignUp)
  // create the sign in option, so users can log into the website and access the game and see more views.
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create the change password, the user have to be authenticated to be able to see this view to change his own password.
  $('#displayChangePassword').on('click', authEvents.displayChangePassword)
  //displayChangePassword
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create the sign out event, so the users will be able logged off from the website and the session will be destroyed.
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#stats').on('click',authEvents.stats)

  //? *** Game events *** ?//
  //create a new game
  $('#new-game').on('click', gameEvents.onCreateGame)
  $('.square').on('click', gameEvents.trackBoard)
  // Reset the game to a new Game.
  $('#reset-game').on('click', gameEvents.onResetGame)


})
