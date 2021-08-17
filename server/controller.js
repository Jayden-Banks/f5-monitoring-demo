const path = require('path')

module.exports = {
    main: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    }
}