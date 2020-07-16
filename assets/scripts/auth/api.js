'use strict'

const config = require('../config')
const store = require('../store')
// the object {user receives a token: 12341123423432}

const signUp = function (formData) {
    console.log(formData)
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: formData
    })
}


module.exports = {
    signUp
}