const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("hello world")
})

app.listen(port, console.log(`App istening on port: ${port}`))