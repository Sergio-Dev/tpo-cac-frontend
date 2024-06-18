import express from "express"

const app = express()
const PORT = 8080

app.use(express.static("public"))

app.get("/users", (rec,res) => {res.send("PUBLIC")} )

app.listen(PORT, () = console.log("en http://localhost:${PORT}"))