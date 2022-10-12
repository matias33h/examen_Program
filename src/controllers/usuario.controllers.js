const usuario=require("../models/usuario")

const ctrlUsuario={}

ctrlUsuario.getUsuario= async(req,res)=>{

    const user= await usuario.find()

    return res.json(user)
}



ctrlUsuario.postUsuario = async (req, res) => {
    
    const { username, password, email } = req.body;

  
    const newUsuario = new usuario({
        username,
        password,
        email,
        
    })

   
    const user = await newUsuario.save();

    
    return res.json({
        msg: 'usuario creado correctamente',
        user
    });
};

module.exports= ctrlUsuario