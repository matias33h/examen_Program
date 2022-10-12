const esAdmin = (req, res, next) => {

    if(req.user.role!="admin"){

        return res.status(401).json({
            message:"No tiene el permiso de admin"
        } )

    }

    next()
}


module.exports= esAdmin