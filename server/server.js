import express  from "express";


const app =  express()

app.get("/", (req, res) => {
    res.send('Api runing')
})


app.listen(5000, console.log("server runing on port 5000"))