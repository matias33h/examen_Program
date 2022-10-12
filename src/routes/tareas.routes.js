const router= require("express").Router();  //Router es para crear  la ruta

const {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas,
} = require("../controllers/tareas.controllers"); //importamos los datos de home controllers
const validarJWT = require("../midelware/validarJWT");


router.get("/tarea", getTareas)
router.post("/tarea",validarJWT, postTareas)
router.put('/tarea/:id',validarJWT,putTareas)
router.delete('/tarea/:id',validarJWT, deleteTareas)
// router.put("/actualizar", putTareas)
// router.delete("/eliminar", deleteTareas)

module.exports= router

