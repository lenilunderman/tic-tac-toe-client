'use strict'
const store = require('../store')
const { css } = require('jquery')

const SignUpSuccess = function () {
    $('.create-account-message').text('The sign up WORK!')
}

const SignUpFailure = function () {
    $('.create-account-message').text('The sign up DID NOT WORK!')
}

module.exports = {
    SignUpSuccess,
    SignUpFailure
}