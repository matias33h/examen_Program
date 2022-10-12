const { request } = require('express');
const jwt =require('jsonwebtoken')
const User = require('../models/usuario')

const validarJWT=async(req,res,next)=>{

let token= req.headers.authorization;


//se verifica si es que existe el token en la peticion

if(!token){
    return res.status(401).json({
        
        message: "no hay token en la peticion"
    })
}

try{

// se compruba la validez del token, si es valido, se obtiene la id del usuario del mismo

const{uid}= await jwt.verify(token,process.env.SECRET) 
//se busca el usuario en la base de dato  para saber si pertenece al sistema

const usuario=await User.findById(uid)

if(!usuario.isActive){
return res.status(401).json({
msg:'Token no valido - usuario con estado false'
})

}

//se añade la informacion del usuario al request para ser usado en el resto del middelware
req.user=usuario

next()
}catch(error){

    console.log(error)

        console.log(error)
        res.status(401).json({

            msg:'Error de autentificacion - Token no valido'
        })



}

}


module.exports=validarJWT










