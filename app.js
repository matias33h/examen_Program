const path=require('path')
const express= require('express')
const cors =require('cors')

const conexion = require('./db/database')
conexion();

const app=express()
require('dotenv').config();
//configuraciones
puerto=process.env.PORT || 3000


// MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.use(require("./routes/tareas.routes"))
app.use(require("./routes/user.routes"))



app.listen(puerto,()=>{
console.log(`se inicio el servidor en http://localhost:${puerto}`)
})
