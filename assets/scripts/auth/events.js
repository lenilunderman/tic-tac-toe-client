'use strict'
// require all the files on the API.
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
    event.preventDefault()
    const data = event.target
    const formData = getFormFields(data)
    console.log(formData)
    // check the API to sign Up
    api.signUp(formData)
        .then(ui.SignUpSuccess)
        .catch(ui.SignUpFailure)
}

const onSignIn = function (event){
    event.preventDefault()
    const data = event.target
    const formData = getFormFields(data)
    // send that data to the API
    api.SignIn(formData)
        .then(ui.SignInSuccess)
        .catch(ui.SignInFailure)
}

const onChangePassword = function (event) {
    event.preventDefault()
    const form = event.target
    const formData = getFormFields(form)
    // send the information to the API to change password.
    api.ChangePassword(formData)
        .then(ui.ChangePasswordSuccess)
        .catch(ui.ChangePasswordFailure)
}


module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword
}