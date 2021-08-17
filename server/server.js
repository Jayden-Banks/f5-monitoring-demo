const express = require('express')
const app = express()
const ctrl = require('./controller.js')
const port = process.env.PORT || 4040

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '834c8deadb0e46698d757e7e14dc6d22',
    captureUncaught: true,
    captureUnhandledRejections: true,
})



app.get('/', ctrl.main)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
