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

    idUser:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios'
    }

},{
    versionKey: false
})

module.exports = model('tareas', TareasShema);