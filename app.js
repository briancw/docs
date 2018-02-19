const express = require('express')
const path = require('path')
const app = express()
const port = 3011

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(port, err => {
    if (err) {
        console.error(err)
    }

    console.log(`Serving docs on port ${port}`)
})
