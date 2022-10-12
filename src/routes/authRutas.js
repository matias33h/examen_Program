const router =require('express').Router()

const {iniciarSesion}=require("../controllers/authUsuarios")

router.post("/login",iniciarSesion)

module.exports = router;

