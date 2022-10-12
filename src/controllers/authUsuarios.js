const User= require("../models/usuario")

const generarJwt=require("../helpers/generarJWT")
const bcrypt=require('bcrypt')

const CtrlAuth={}

CtrlAuth.iniciarSesion= async(req,res,next)=>{

const{username,password}=req.body

try {
    
const user =await User.findOne({username})


if(!user){
    return res.status(400).json({
        ok:false,
        message: "error ,usuario no encontrado"})
    }

//verifica que la contraseña sa correcta 
const validarPassword= bcrypt.compareSync(password,user.password)

if(!validarPassword){

return res.status(400).json({message:"Error al autentificarse, Contraseña incorrecta"


})

}

//Generamos el token
const token=await generarJwt({uid:user.id})
return res.json({
    token
})

 
} catch (error) {

    return res.json({message:"Error al iniciar sesion",
error:error.message })
    
}





}

module.exports = CtrlAuth