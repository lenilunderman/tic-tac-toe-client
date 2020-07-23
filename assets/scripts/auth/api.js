'use strict'

const config = require('../config')
const store = require('../store')
// the object {user receives a token: 12341123423432}

const signUp = function (formData) {
    //console.log(formData)
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: formData
    })
}

const SignIn = function (formData) {
    //console.log(formData)
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: formData
    })
}

const ChangePassword = function (formData) {

    return $.ajax({
        headers: {
            // Access the token on the `store.user` object. This only works if we sign in first
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        data: formData
    })
}

const SignOut = function () {
    return $.ajax({
        headers: {
            // Access the token and delete the token inside the store user.
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/sign-out',
        method: 'DELETE',
    })
}

const getStats = function () {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }

module.exports = {
    signUp,
    SignIn,
    ChangePassword,
    SignOut,
    getStats
}