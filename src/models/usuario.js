const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
       
    },
    isActive: {
        type: Boolean,
        
        default: true,
    },

    role:{
        type: String,
        defaul:"user"
    }
})
module.exports=model('Usuario',usuarioSchema);



