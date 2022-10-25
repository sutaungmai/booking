require('dotenv/config')

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const app = express()
const authRoutes = require('./routes/auth')
const hotelsRoutes = require('./routes/hotels')
const usersRoutes = require('./routes/users')
const roomsRoutes = require('./routes/rooms')

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log('database is connected')
    }catch (error) {
        throw error
    }
}
mongoose.connection.on('disconnected',() => {
    console.log('db is disconnected');
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/hotels', hotelsRoutes)
app.use('/rooms', roomsRoutes)
app.use('/users', usersRoutes)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(process.env.PORT || 8000, () => {
    console.log('server is connected');
    dbConnect()
})