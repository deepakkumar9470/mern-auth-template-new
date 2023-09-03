import dotenv from 'dotenv'
dotenv.config()
const PORT= process.env.PORT || 8000
import express from 'express'
import cors from 'cors'
const app = express()
import authRoute from './routes/api.js'
import connectDb from './db/db.js'
app.use(cors())

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use('/api/auth',authRoute)

connectDb()

app.get('/', (req,res)=>{
    res.send('Hurray')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})