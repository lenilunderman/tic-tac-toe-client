'use strict'
const store = require('../store')
const { css } = require('jquery')

const SignUpSuccess = function () {
    $('.create-account-message').text('The sign up WORK!')
}

const SignUpFailure = function () {
    $('.create-account-message').text('The sign up DID NOT WORK!')
}

const SignInSuccess = function (response) {
    // hide events
    $('.create-account').hide()
    $('#sign-in').hide()

    //show events
    $('#change-password').show()

    //other events and views
    $('.sign-in-message').text('The user logged in successfully!')
    console.log(response)
    store.user = response.user
    console.log(store.user.token)

}

const SignInFailure = function () {
    $('.sign-in-message').text('Your username or password is incorrect!')
}

const ChangePasswordSuccess = function () {
    $('.change-password-message').text('You successfully changed the password.')
}

const ChangePasswordFailure = function () {
    $('.change-password-message').text('Ops... there is an error, your old password does not match.')
}

module.exports = {
    SignUpSuccess,
    SignUpFailure,
    SignInSuccess,
    SignInFailure,
    ChangePasswordSuccess,
    ChangePasswordFailure
}

// user:
// createdAt: "2020-07-16T13:48:25.833Z"
// email: "leni@gmail.com"
// token: "e7b94c9fa14b2939a1e10e14458b1ba1"
// updatedAt: "2020-07-16T13:58:14.577Z"
// __v: 0
// _id: "5f105aa9ab4d930017cdbbeb"