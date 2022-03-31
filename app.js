const express = require('express');
const app = express();
const port = 4040;

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(process.env.PORT || port, 
    () => console.log(`Connect to port ${port}`))