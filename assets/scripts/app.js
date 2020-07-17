'use strict'

// all the requires goes here.
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // js event handlers

  // hide events goes here ...
  $('#change-password').hide()
  $('#sign-out').hide()

  // show events goes here...

  // other events goes here ...

  // create a new account, so that the user will be able to access the game.
  $('#create-account').on('submit', authEvents.onSignUp)
  // create the sign in option, so users can log into the website and access the game and see more views.
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create the change password, the user have to be authenticated to be able to see this view to change his own password.
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create the sign out event, so the users will be able logged off from the website and the session will be destroyed.
  $('#sign-out').on('submit', authEvents.onSignOut)


  //? *** Game events *** ?//
  $('.square').on('click', gameEvents.trackBoard)


})
