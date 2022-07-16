//dwse se afto to file prosvasi sto express
const express = require('express')
const app = express()
//port gia to website
//3000-8000
const port = 8000

app.use(express.static('www'));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))

