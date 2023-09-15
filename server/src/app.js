const express = require('express')
const parser = require('body-parser')

const app = express()
app.use(parser.json())

app.get('/status', (req,res) => {
    res.send({
        message: 'Hello world'
    })
})

app.listen(process.env.PORT || 8081,()=> {
    console.log('PORT IS RUNNIG ON 3000')
})