
const path=require('path')
const express= require('express')
const cors =require('cors')
require("dotenv").config()
const app=express()

const conexion = require('./src/db/database')
conexion();

app.use(express.json())

app.use(require("./src/routes/tareas.routes"))
app.use(require("./src/routes/user.routes"))
app.use(require("./src/routes/authRutas"))


puerto=process.env.PORT || 3000

app.listen(puerto,()=>{
console.log(`se inicio el servidor en http://localhost:${puerto}`)
})






