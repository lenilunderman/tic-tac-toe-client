createGameSuccess
createGameError

'use strict'
const store = require('../store')
const { css } = require('jquery')

const createGameSuccess = function (response) {
    console.log(response)
}

const createGameError = function (error) {
    console.log(error)
}

module.exports = {
    createGameSuccess,
    createGameError
}