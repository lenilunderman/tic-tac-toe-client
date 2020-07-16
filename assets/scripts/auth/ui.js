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
    $('.create-account').hide()
    $('.sign-in-message').text('The user logged in successfully!')
    console.log(response)
    store.user = response.user
    console.log(store.user.token)

}

const SignInFailure = function () {
    $('.sign-in-message').text('Your username or password is incorrect!')
}

module.exports = {
    SignUpSuccess,
    SignUpFailure,
    SignInSuccess,
    SignInFailure
}

// user:
// createdAt: "2020-07-16T13:48:25.833Z"
// email: "leni@gmail.com"
// token: "e7b94c9fa14b2939a1e10e14458b1ba1"
// updatedAt: "2020-07-16T13:58:14.577Z"
// __v: 0
// _id: "5f105aa9ab4d930017cdbbeb"