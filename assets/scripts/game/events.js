const api = require('../auth/api')
const apiGame = require('../game/api')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

// Used to check if the is a tie game.
let counterSquare = 0
let playerChoice = 'X'
// Used to storage the number of victories in the game.
let gamesVictories = 0

const trackBoard = function (event) {
    // Select the exactly cell that it was clicked.
    const cellSelected = $(event.target)
    // console.log(cellSelected) Displays div selected on the game.
    let indexCell = cellSelected.index()

    // check if that cell has a class with a especific name
    if (cellSelected.hasClass('X') || cellSelected.hasClass('O')) {
        return
    } else {
        if (playerChoice === 'X') {
            cellSelected.addClass('X')
            $('#player-turn').html('<b>Player "O" Turn </b> ')
            // Check if Player X won the game.
            if (checkWinner('X')) {
                ++gamesVictories
                $('#winner-message').html('<div> Congratulations <img src="./public/closeICON.png" class="py-4 px-4"> <br> You won the game </br> <img src="./public/trophy.png" class="py-4 px-4 mt-4"> </div>')

                $('#winner-message').show()
                $('#number-wins').html('<b> Number of wins: ' + gamesVictories + '</b>')
                ui.createNewGame()
            }

            else {
                // Switch player in case X does win the game.
                playerChoice = 'O'
            }
        }
        else {
            cellSelected.addClass('O')
            if (checkWinner('O')) {
                gamesVictories++
                $('#winner-message').html('<div> Congratulations <img src="./public/circleICON.png" class="py-4 px-4"> <br> You won the game </br> <img src="./public/trophy.png" class="py-4 px-4 mt-4"> </div>')

                $('#winner-message').show()
                $('#number-wins').html('<b> Number of wins: ' + gamesVictories + '</b>')
                ui.createNewGame()

            } else {
                $('#player-turn').html('<b>Player "X" Turn </b> ')
                // Switch player in case O does win the game.
                playerChoice = 'X'
            }
        }
        // Ajax
        return $.ajax({
            headers: {
                // Access the token on the `store.user` object. This only works if we sign in first.
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
                    "over": false // won true
                }
            }
        })
            .then(ui.updateGameSuccess)
            .catch(ui.updateGameFailure)
    }
}

function checkWinner(containClass) {
    // Check che combinations for the winner...
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

// Check if all the board is filled and if there is still no winner, giving a tie game.
const isTieGame = function (event) {
    $('.cell').on('click', function () {
        // Start the counter for the number of squares.
        const tieCount = ++counterSquare
        // console.log(tieCount)  Counts how many squares were clicked.
        if (tieCount === 9) {
            $('#winner-message').html('<div> It is a tie game! <br> <img src="./public/score.png" class="py-4 px-4 mt-4"> </div>').show()
            // Set to zero in case, there is a tie, so the action can be taken again in case the player decides to play a new game.
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
    counterSquare = 0

    ui.showBoard()
    apiGame.CreateGame(token)
        .then(ui.createGameSuccess)
        .catch(ui.createGameError)
}

const onResetGame = function (event) {
    $('.square').removeClass('X').removeClass('O')
    // Set the numbers of victories to zero in case, the user decides to reset.
    gamesVictories = 0
    $('#number-wins').html('<b> Number of wins: ' + gamesVictories + '</b>')
    $('#winner-message').hide()
}

// const token = store.user.token  maybe use to check if the user is the same to set the number of victories depending on the user??!!

module.exports = {
    trackBoard,
    checkWinner,
    onCreateGame,
    onResetGame,
    isTieGame
}