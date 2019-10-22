const validator = require('validator')
const getNotes = require('./notes.js') 

const msg = getNotes()

console.log(validator.isURL('google.com'))