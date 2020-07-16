'use strict'

// all the requires goes here.
const authEvents = require('./auth/events')

$(() => {
  // js event handlers
  // create a new account
  $('#create-account').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)



})
