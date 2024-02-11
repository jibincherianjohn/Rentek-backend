// load .env
require('dotenv').config()


// connecting MongoDb
require('./Connection/connection')


// import express sever

const express= require('express')

// import cors
const cors=require('cors')

const router=require('./Router/route')

// create server using express
 const Projectserver=express()


//  use server

 Projectserver.use(cors())

//  data conversion
 Projectserver.use(express.json())

 Projectserver.use(router)

 // export upload folder to client
 Projectserver.use('/uploads',express.static('./uploads'))


 const PORT=4000 || process.env.PORT

//  using the port
Projectserver.listen(PORT,()=>{
console.log(` ----- the Severe started at the port ${PORT}`);
})


