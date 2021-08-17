const path = require('path')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '834c8deadb0e46698d757e7e14dc6d22',
    captureUncaught: true,
    captureUnhandledRejections: true,
})





module.exports = {
    main: (req,res) => {
        rollbar.log('Hello world!')
        res.sendFile(path.join(__dirname, '../public/index.html'))
    }
}