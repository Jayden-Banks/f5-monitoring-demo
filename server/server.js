const express = require('express')
const app = express()
const ctrl = require('./controller.js')
const port = process.env.PORT || 4040

app.get('/', ctrl.main)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
