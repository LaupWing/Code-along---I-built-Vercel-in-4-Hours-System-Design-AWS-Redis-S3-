import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.post("/deploy", (req, res) => {
    const rep_url = req.body.rep_url
    console.log(rep_url)
    res.json({})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
