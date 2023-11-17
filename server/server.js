const express = require("express")
const app = express()
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("pern stack")
})

app.listen("5001", () => {
    console.log("server has started on port 5001")
})