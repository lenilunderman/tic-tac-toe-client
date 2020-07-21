'use strict'
// require all the files on the API.
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
    event.preventDefault()
    const data = event.target
    const formData = getFormFields(data)

    // Check the information and send the data to the API.
    api.signUp(formData)
        .then(ui.SignUpSuccess)
        .catch(ui.SignUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    const data = event.target
    const formData = getFormFields(data)
    // Send the information to the API to sign in the user.
    api.SignIn(formData)
        .then(ui.SignInSuccess)
        .catch(ui.SignInFailure)
}

const displayChangePassword = function (event) {
    $('.change-password-container').show()
    $('#game-board').hide()
}

const onChangePassword = function (event) {
    event.preventDefault()
    const form = event.target
    const formData = getFormFields(form)
    // Send the information to the API to change password.
    api.ChangePassword(formData)
        .then(ui.ChangePasswordSuccess)
        .catch(ui.ChangePasswordFailure)
}

const onSignOut = function (event) {
    event.preventDefault()
    api.SignOut()
        .then(ui.signOutSuccess)
        .catch(ui.signOutFailure)
}

module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    displayChangePassword,
    onSignOut
}