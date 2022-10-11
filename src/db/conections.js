const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        mongoose.connect("mongodb+srv://ezequiel77:ortiz@matias.b2wrjwo.mongodb.net/db_server?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Conectado a la Base de Datos');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;


