
const path=require('path')
const express= require('express')
const cors =require('cors')
const app=express()

const conexion = require('./db/database')
conexion();

app.use(express.json())

app.use(require("./routes/tareas.routes"))
app.use(require("./routes/user.routes"))


puerto=process.env.PORT || 3000

app.listen(puerto,()=>{
console.log(`se inicio el servidor en http://localhost:${puerto}`)
})






