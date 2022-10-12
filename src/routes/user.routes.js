const router=require("express").Router()


const {
    getUsuarios,
    getById,
    postUsuarios,
    putUsuarios,
    deleteUsuarios

}=require("../controllers/usuario.controllers")

router.get("/usuario",getUsuarios)
router.get("/usuario/:id",getById)
router.post("/usuario",postUsuarios)
router.put("/usuario/:id",putUsuarios)
router.delete("/usuario/:id",deleteUsuarios)

module.exports= router;