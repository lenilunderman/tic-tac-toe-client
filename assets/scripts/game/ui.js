createGameSuccess
createGameError

'use strict'
const store = require('../store')
const { css } = require('jquery')

const createGameSuccess = function (response) {
    console.log(response)
    console.log(response.game.cells)
}

const createGameError = function (error) {
    console.log(error)
}

const updateGameSuccess = function () {
    console.log('Success')
}

const updateGameFailure = function (error) {
    console.log(error)
}



module.exports = {
    createGameSuccess,
    createGameError,
    updateGameSuccess,
    updateGameFailure
}

// {"game":
//     {"cells":["","","","","","","","",""],
//     "over":false,"_id":"5f11e9ca68a08d001777c90a",
//     "owner":"5f105aa9ab4d930017cdbbeb",
//     "createdAt":"2020-07-17T18:11:22.176Z",
//     "updatedAt":"2020-07-17T18:11:22.176Z",
// "__v":0}}

// response.game._id