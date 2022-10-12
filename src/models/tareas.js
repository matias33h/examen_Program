const {
    Schema,
    model
} = require('mongoose');

const TareasShema = new Schema({

    fecha: {
        type: Date,
        default: Date.now
    },

    categoria: {
        type: String
    },

    descripcion: {
        type: String,
        required: true
    },

    titulo: {
        type: String,
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true

    },

    role: {
        type: String,
        default: 'user'

    },

    idUser:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        default:"user"
    }




})

module.exports = model('tareas', TareasShema);