const router=require("express").Router();
const validarJWT=require("../midelware/validarJWT");

const {
    getUsuarios,

    postUsuarios,
    putUsuarios,
    deleteUsuarios

}=require("../controllers/usuario.controllers");

router.get("/usuario",[validarJWT], getUsuarios);
//router.get("/usuario",[validarJWT],getById);
router.post("/usuario",[validarJWT], postUsuarios);
router.put("/usuario/:id",[validarJWT],putUsuarios);
router.delete("/usuario/:id",[validarJWT],deleteUsuarios);

module.exports= router;