const config = require('../config')
//const auth = require('../auth')
const store = require('../store')


const CreateGame = function (token) {
    console.log(token)
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'POST',
        headers: {
            // Access the token on the `store.user` object
            // This only works if we sign in first
            Authorization: 'Bearer ' + store.user.token
        },
        contentType: 'application/json',
    })
}

module.exports = {
    CreateGame
}