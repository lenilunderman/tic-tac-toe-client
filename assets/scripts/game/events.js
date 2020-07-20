const api = require('../auth/api')
const apiGame = require('../game/api')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
let counterSquare = 0

let playerChoice = 'X'
let gamesVictories = 0


const trackBoard = function (event) {
    // select the exactly cell that it was clicked
    const cellSelected = $(event.target)
    console.log(cellSelected)
    let indexCell = cellSelected.index()

    // check if that cell has a class with a especific name
    if (cellSelected.hasClass('X') || cellSelected.hasClass('O')) {
        return
    } else {
        if (playerChoice === 'X') {
            cellSelected.addClass('X')
            $('#player-turn').text('Player O Turn')
            // check if player won the game
            if (checkWinner('X')) {
                ++gamesVictories
                $('#winner-message').text('Congratulation Player: ' + playerChoice + ' you won the game!')
                $('#winner-message').show()
                $('#number-wins').html('<b> Number of wins: </b>' + gamesVictories)
                ui.createNewGame()
            }
            else {
                playerChoice = 'O'
            }
        }
        else {
            cellSelected.addClass('O')
            if (checkWinner('O')) {
                gamesVictories++
                $('#winner-message').text('Congratulation Player: ' + playerChoice + ' you won the game!')
                $('#winner-message').show()
                $('#number-wins').html('<b> Number of wins: </b>' + gamesVictories)
                ui.createNewGame()

            } else {
                $('#player-turn').text('Player X Turn')
                playerChoice = 'X'
            }
        }
        //ajax
        return $.ajax({
            headers: {
                // Access the token on the `store.user` object
                // This only works if we sign in first
                Authorization: 'Bearer ' + store.user.token
            },
            url: 'https://tic-tac-toe-api-production.herokuapp.com/games/' + store.ID, // something goes here too..
            method: 'PATCH',
            data: {
                "game": {
                    "cell": {
                        "index": indexCell, //curent index
                        "value": playerChoice // cunrent value
                    },
                    "over": false // won ttrue
                }
            }
        })
            // ?? I need to access the information that is inside the create new game response.game._id
            .then(ui.updateGameSuccess)
            .catch(ui.updateGameFailure)
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

// check for a draw game :-)
const isTieGame = function (event) {
    $('.cell').on('click', function () {
        //counterSquare++
        const tieCount = ++counterSquare
        console.log(tieCount)
        if (tieCount === 9) {
            $('#winner-message').text('It is a tie Game!').show()
            counterSquare = 0
        }
    })
}
isTieGame()

const onCreateGame = function (event) {
    const token = store.user.token
    $('.square').removeClass('X').removeClass('O')
    $('.change-password-container').hide()
    $('#game-board').show()
    $('#winner-message').hide()

    ui.showBoard()
    apiGame.CreateGame(token)
        .then(ui.createGameSuccess)
        .catch(ui.createGameError)
}

const onResetGame = function (event) {
    $('.square').removeClass('X').removeClass('O')
    gamesVictories = 0
    $('#number-wins').html('<b> Number of wins: </b>' + gamesVictories)
    $('#winner-message').hide()
}


module.exports = {
    trackBoard,
    checkWinner,
    onCreateGame,
    onResetGame,
    isTieGame
}
