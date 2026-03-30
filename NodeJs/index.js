
import express from "express"

const app = express();

app.get("/user", (req, res) => {

    res.send({ message: "Server Response" })

})

app.get("/posts", (req, res) => {

    res.send({ tittle: "Server Response" })

})

app.listen(3000, () => {

    console.log("Start Reverser");

})