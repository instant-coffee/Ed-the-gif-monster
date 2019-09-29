import axios from "axios"
import config from "../../config"

exports.handler = function (event, context, callback) {
  const apiRoot = "http://api.giphy.com/v1/gifs/search"
  const apiKey = process.env.ACCESS_KEY || config.apiKey
  const testEndpoint = `${apiRoot}?q=cheeseburgers&api_key=${apiKey}`
  // const searchEndpoint = `${apiRoot}?q=${searchTerm}&api_key=${apiKey}`

  axios.get(testEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        gifs: res.data,
      }),
    })
  })
}