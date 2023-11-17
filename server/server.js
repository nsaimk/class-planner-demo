const express = require("express")
const app = express()
const cors = require("cors")
const { pool } = require("./dbConfig");

//middleware
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    const queryText = `SELECT * FROM public.user`;
    const result = await pool.query(queryText)
    res.send(result.rows)
})

app.listen("5001", () => {
    console.log("server has started on port 5001")
})