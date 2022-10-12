
const user = require("../models/usuario")
const bcrypt=require("bcrypt")
const ctrlUsuarios={}

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlUsuarios.getUsuarios = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const usuario = await user.find({active:true});

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(usuario)
};

// conrolador getbyid
ctrlUsuarios.getById = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const id=req.params.id;
    const usuario = await user.findOne({$and:[{_id:id},{active:true}]});

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(usuario)
};


// Controlador para crear nuevo usuario en la Base de Datos.
ctrlUsuarios.postUsuarios = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { username, password, email } = req.body;

const newPassword=bcrypt.hashSync(password,10)


    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newUsuario = new user({
        username,
        password: newPassword,
        email
    })

    // Se almacena en la base de datos con método asícrono .save()
    const usuarios = await newUsuario.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    
    return res.json({
        msg: 'usuario creado correctamente',
        usuarios
    });
};

ctrlUsuarios.putUsuarios=async (req,res)=>{
try {

    const id=req.params.id;

    const {username, password, email}= req.body;

    const userUpdate= await user.findByIdAndUpdate(id,{username, password, email})
    
    const usermodifificad = await user.findById(id) //para que me traiga la actualizacion actual
    
    return res.json({
        "suarioSinModificar": userUpdate,
        "usuarioModificada": usermodifificad //para que me traiga la actualizacion actual
    })
    
} catch (error) {
    console.log(error.message)
    res.send('Error al modificar la Usuario')
}

}


ctrlUsuarios.deleteUsuarios=async (req,res)=>{

    let idUsuario=req.params.id

    try {
        await user.findByIdAndUpdate(idUsuario,{active:false})
        return res.json('Usuario  eliminada ')
        

    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg:'error al eliminar el Usuario'
        })
    }


}

module.exports =ctrlUsuarios;
