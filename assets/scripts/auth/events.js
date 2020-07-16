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

module.exports = {
    onSignUp
}