const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 5000
const {MONGOURI} = require('./keys')
const bcrypt = require("bcryptjs")

mongoose.connect(MONGOURI,{
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    })

mongoose.connection.on('connected', () => {
    console.log("connected to mongodb atlas")
})
mongoose.connection.on('error', () => {
    console.log("not connected to mongodb atlas")
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(port,()=>{
    console.log("Server is running on " + port)
})