const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 5000
const {MONGOURI} = require('./keys')
const bcrypt = require("bcryptjs")

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))



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

const customMiddleware = (req, res, next) => {
    console.log("middleware executed")
    next()
}
// app.use(customMiddleware)



app.listen(port,()=>{
    console.log("Server is running on " + port)
})