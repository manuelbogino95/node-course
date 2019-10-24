const request = require('request')

const url = 'https://api.darksky.net/forecast/93dc70be3df459bd5a3848e897132b8f/37.8267,-122.4233'

request(url, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.currently)
})