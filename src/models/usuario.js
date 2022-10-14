const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
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
},{
    versionKey: false,
    timestamps: true
})
module.exports=model('Usuario',usuarioSchema);



