const mongoose = require("mongoose")

const conexion= async() => {

    mongoose.connect("mongodb+srv://ezequiel77:ortiz@matias.b2wrjwo.mongodb.net/db_server?retryWrites=true&w=majority")


}

module.exports=conexion;

