'use strict'

let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-api-production.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.production
  //apiUrl = apiUrls.development
} else {
  //apiUrl = apiUrls.production
  apiUrl = apiUrls.development
}

module.exports = {
  apiUrl
}
