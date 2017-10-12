const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send({
    message: "HELLO WORLD"
  })
})

app.listen(3000, () => {
  console.log("RUNNING ON localhost:3000")
})
