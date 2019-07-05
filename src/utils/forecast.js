const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5834ed1d1a4ba1eead85214ca3857ef1/' + latitude + ',' + longitude
    
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Could not connect to the weather service', undefined)
        } else if (body.error) {
           callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature + ' degrees out.')
        }
    })
}

  module.exports = forecast