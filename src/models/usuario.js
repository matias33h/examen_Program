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
    active: {
        type: Boolean,
        
        default: true,
    }
})
module.exports=model('Usuario',usuarioSchema);



