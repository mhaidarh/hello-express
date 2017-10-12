const express = require("express")
const app = express()
const request = require("request")

app.get("/", (req, res) => {
  request("https://swapi.co/api/people/1", (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
    }
    res.send({
      message: "GET",
      content: JSON.parse(body)
    })
  })
})

app.listen(3000, () => {
  console.log("RUNNING ON localhost:3000")
})
