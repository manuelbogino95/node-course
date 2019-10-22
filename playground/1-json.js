const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Manuel'
user.age = 24

fs.writeFileSync('1-json.json', JSON.stringify(user))

console.log(user)