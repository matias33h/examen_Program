const jwt= require('jsonwebtoken')


const generarJWT =(uid)=>{

return new Promise((resolve, reject)=>{

//genera el token con id de usuario y el secreto
 jwt.sign(uid,process.env.SECRET,{

expiresIn:"7h"

 },
(error,token)=>{

if(error){
reject("No se ha podido generar el token")

}

resolve(token)
}
 )


})





}


module.exports = generarJWT











