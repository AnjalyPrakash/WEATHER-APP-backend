require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./Router/router')

require('./Db/Connection')

const weatherServer=express()

weatherServer.use(cors())

weatherServer.use(express.json())

weatherServer.use(router)

const port=5000 || process.env

weatherServer.listen(port,()=>{
    console.log(`WEATHER APP SERVER RUNNING SUCCESSFULLY AT ${port}`);
})

