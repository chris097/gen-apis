const express = require('express');
const studentsRouter = require('./src/students/routes');

const app = express();
const port = 4040;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use('/api/v1/students', studentsRouter)

app.listen(process.env.PORT || port, 
    () => console.log(`Connect to port ${port}`))