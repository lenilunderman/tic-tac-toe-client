createGameSuccess
createGameError

'use strict'
const store = require('../store')
const { css } = require('jquery')
const { trackBoard } = require('./events')

const createGameSuccess = function (response) {
    console.log(response)
    console.log(response.game.cells)
    store.ID = response.game._id
    console.log(store.ID)
    $('game-board').show()
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

const winnerGameSuccess = function () {
    //$('.game-row').hide()
    //const newGame = trackBoard()
}

const createNewGame = function () {
    $('.cell').removeClass("X")
    $('.cell').removeClass("O")
    $('#game-board').hide()

}

const showBoard = function () {
    $('#game-board').show()
    

}


module.exports = {
    createGameSuccess,
    createGameError,
    updateGameSuccess,
    updateGameFailure,
    winnerGameSuccess,
    createNewGame,
    showBoard
}