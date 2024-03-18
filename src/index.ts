import express from "express"
import simpleGit from "simple-git"
import cors from "cors"
import { generate } from "./utils"

const app = express()
app.use(express.json())
app.use(cors())

app.post("/deploy", async (req, res) => {
    const rep_url = req.body.rep_url
    const id = generate()
    await simpleGit().clone(rep_url, `output/${id}`)
    res.json({})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
