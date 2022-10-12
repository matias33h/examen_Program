const router= require("express").Router();  //Router es para crear  la ruta

const {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas,
} = require("../controllers/tareas.controllers") //importamos los datos de home controllers


router.get("/tarea", getTareas)
router.post("/tarea", postTareas)
router.put('/tarea/:id', putTareas)
router.delete('/tarea/:id', deleteTareas)
// router.put("/actualizar", putTareas)
// router.delete("/eliminar", deleteTareas)

module.exports= router

