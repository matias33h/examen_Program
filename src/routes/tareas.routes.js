const router= require("express").Router();  //Router es para crear  la ruta



const {
    getTareas,
    getTareaById,
    postTareas,
    putTareas,
    deleteTareas,
} = require("../controllers/tareas.controllers"); //importamos los datos de home controllers

const validarJWT = require("../midelware/validarJWT");



router.post("/tarea", postTareas)
router.get("/tarea",[validarJWT],getTareas)
router.get("/tarea/:id",[validarJWT],getTareaById)
router.post('/tarea/',[validarJWT],postTareas)
router.put('/tarea/:id',[validarJWT],putTareas)
router.delete('/tarea/:id',[validarJWT],deleteTareas)






// router.put("/actualizar", putTareas)
// router.delete("/eliminar", deleteTareas)

module.exports= router

