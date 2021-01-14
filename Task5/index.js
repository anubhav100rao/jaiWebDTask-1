const express = require('express')
const path = require('path');
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.get('/:name', (req, res) => {
    let str = req.params.name;
    res.send(`Hello ${str}`)
})

app.listen(PORT, () => { console.log(`Listening at https://localhost:${PORT}`) })