const router=require("express").Router()


const {
    getUsuario,
    postUsuario,

}=require("../controllers/usuario.controllers")

router.get("/consulta",getUsuario)
router.post("/insertar",postUsuario)

module.exports= router;