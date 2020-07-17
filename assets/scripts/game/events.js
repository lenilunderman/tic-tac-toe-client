const api = require('../auth/api')
const apiGame = require('../game/api')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

let playerChoice = 'X'
let gamesVictoriesX = 0
let gamesVictories0 = 0

const trackBoard = function (event) {
    // select the exactly cell that it was clicked
    const cellSelected = $(this)
    // check if that cell has a class with a especific name
    if (cellSelected.hasClass('X') || cellSelected.hasClass('O')) {
        return
    } else {
        if (playerChoice === 'X') {
            cellSelected.addClass('X')
            $('#player-turn').text('Player O Turn')
            // check if player won the game
            if (checkWinner('X')) {
                $('#player-turn').text('Congratulation Player: ' + playerChoice + ' you won the game!')
                gamesVictoriesX++
                console.log(gamesVictoriesX)
            }
            else {
                playerChoice = 'O'
            }
        }
        else {
            cellSelected.addClass('O')
            if (checkWinner('O')) {
                $('#player-turn').text('Congratulation Player: ' + playerChoice + ' you won the game!')
                gamesVictories0++
                console.log(gamesVictories0)
            } else {
                $('#player-turn').text('Player X Turn')
                playerChoice = 'X'
            }
        }
    }
}

function checkWinner(containClass) {
    if ($('.s1').hasClass(containClass) && $('.s2').hasClass(containClass) && $('.s3').hasClass(containClass)) {
        return true
    } else if ($('.s4').hasClass(containClass) && $('.s5').hasClass(containClass) && $('.s6').hasClass(containClass)) {
        return true
    } else if ($('.s7').hasClass(containClass) && $('.s8').hasClass(containClass) && $('.s9').hasClass(containClass)) {
        return true
    } else if ($('.s1').hasClass(containClass) && $('.s4').hasClass(containClass) && $('.s7').hasClass(containClass)) {
        return true
    } else if ($('.s2').hasClass(containClass) && $('.s5').hasClass(containClass) && $('.s8').hasClass(containClass)) {
        return true
    } else if ($('.s3').hasClass(containClass) && $('.s6').hasClass(containClass) && $('.s9').hasClass(containClass)) {
        return true
    } else if ($('.s1').hasClass(containClass) && $('.s5').hasClass(containClass) && $('.s9').hasClass(containClass)) {
        return true
    } else if ($('.s3').hasClass(containClass) && $('.s5').hasClass(containClass) && $('.s7').hasClass(containClass)) {
        return true
    } else {
        return false
    }
}

const onCreateGame = function (event) {
    const token = store.user.token
    apiGame.CreateGame(token)
     .then(ui.createGameSuccess)
     .catch(ui.createGameError)
}



module.exports = {
    trackBoard,
    checkWinner,
    onCreateGame
}
