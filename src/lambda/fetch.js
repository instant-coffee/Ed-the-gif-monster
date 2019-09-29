import axios from "axios"
import config from "../../config"

exports.handler = (event, context, callback) => {  
  console.log("TCL: exports.handler -> event", event.queryStringParameters[0])
  const apiRoot = "http://api.giphy.com/v1/gifs/search"
  const apiKey = process.env.ACCESS_KEY || config.apiKey
  const searchTerm = event.queryStringParameters[0]
  const searchEndpoint = `${apiRoot}?q=${searchTerm}&api_key=${apiKey}`

  axios.get(searchEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        gifs: res.data,
      }),
    })
  })
}