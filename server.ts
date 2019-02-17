import express from 'express';

const app = express();

app.get("/", (req, res, next) => {
    res.send("booking API");
})

app.get("/tours", (req, res, next) => {
    res.send("get a list of tours...");
})

app.post("/tours", (req, res, next) => {
    res.send("add a new tour...");
})

app.listen(process.env.PORT || 8091, () => {console.log("server started")});