const { Schema, model }= require('mongoose');

const TareasShema = new Schema({
     
    fecha:{
        type:Date,
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
    
    active:{
  type:Boolean,
  default:true

  }
})

module.exports= model('tareas', TareasShema);

