const request = require('request')

const url = 'https://api.darksky.net/forecast/93dc70be3df459bd5a3848e897132b8f/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.currently)
  const { body: { currently: { temperature, precipProbability }, daily: { data } } } = response
  const message = `${data[0].summary} It is currently ${temperature} degrees out. Tere is a ${precipProbability}% chance of rain`
  console.log(message)
})