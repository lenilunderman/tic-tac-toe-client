'use strict'
const store = require('../store')
const { css } = require('jquery')

const SignUpSuccess = function () {
    $('.create-account-message').text('The account was created successfully.')
    $('#create-account :input').val('')
}

const SignUpFailure = function () {
    $('.create-account-message').text('Please create an account to access the website!')
}

const SignInSuccess = function (response) {
    // hide events
    $('.create-account').hide()
    $('#sign-in').hide()

    //show events
    $('#change-password').show()
    $('#sign-out').show()

    //other events and views
    $('.sign-in-message').text('Welcome to the website! Are you there to play the amazing tic-tac-toe?')
    // storage the user inside the store variable, in which you can access the token.
    store.user = response.user
}

const SignInFailure = function () {
    $('.sign-in-message').text('Your username or password is incorrect!')
}

const ChangePasswordSuccess = function () {
    $('.change-password-message').text('You successfully changed the password.')
    $('#change-password :input').val('')
}

const ChangePasswordFailure = function () {
    $('.change-password-message').text('Ops... there is an error, your old password does not match.')
}

const signOutSuccess = function () {
    // hide events
    $('#sign-out').hide()
    $('#change-password').hide()
    $('.sign-in-message').hide()

    // show events
    $('.create-account').show()
    $('#sign-in').show()

    //other events
    $('#sign-in :input').val('')
}

const signOutFailure = function () {
    $('.sign-out-message').text('You need to be logged in, to be able to sign out of the website.')
}


module.exports = {
    SignUpSuccess,
    SignUpFailure,
    SignInSuccess,
    SignInFailure,
    ChangePasswordSuccess,
    ChangePasswordFailure,
    signOutSuccess,
    signOutFailure
}

// user:
// createdAt: "2020-07-16T13:48:25.833Z"
// email: "leni@gmail.com"
// token: "e7b94c9fa14b2939a1e10e14458b1ba1"
// updatedAt: "2020-07-16T13:58:14.577Z"
// __v: 0
// _id: "5f105aa9ab4d930017cdbbeb"