'use strict'

// all the requires goes here.
const authEvents = require('./auth/events')

$(() => {
  // js event handlers

  //hide events goes here ...
  $('#change-password').hide()





  // create a new account.
  $('#create-account').on('submit', authEvents.onSignUp)
  // create the sign in option, so users can log into the website.
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create the change password, the user have to be authenticated to be able to see this view.
  $('#change-password').on('submit', authEvents.onChangePassword)



})
