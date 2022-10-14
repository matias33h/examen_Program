
const task = require("../models/tareas")

const ctrlTareas={}

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlTareas.getTareas = async (req, res) => {
   
    // Se consultan todos los documentos de la base de datos.
    const tareas = await task.find({active:true});
    
    
    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(tareas)
};




// conrolador getbyid
ctrlTareas.getTareabyUser = async (req, res) => {
    const idUsuario= req.user._id

    const tareaUser= await task.find({$and:[{idUser:idUsuario},{active:true}]})
 
    return res.json(tareaUser)
    // Se devuelve al cliente un arreglo con los datos de los usuarios.

};




// Controlador para crear nuevo usuario en la Base de Datos.
ctrlTareas.postTareas = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { categoria, descripcion, titulo } = req.body;
    const idUsuario = req.user._id 

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newTarea = new task({
        categoria,
        descripcion,
        titulo,
        idUser: idUsuario
    })

    // Se almacena en la base de datos con método asícrono .save()
    const tarea = await newTarea.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    
    return res.json({
        msg: 'Tarea creada correctamente',
        tarea
    });
};

ctrlTareas.putTareas=async (req,res)=>{
try {

    const id=req.params.id;
    const idUser2 = req.user._id.toString();

    const { descripcion, titulo}= req.body;

    const task2 = await task.findById(id)

    if(idUser2 != task2.idUser.toString()){   //conbierte mi objeto a string para comparar los valores
        return res.status(400).json({
            message: 'No tenes permiso para cambiar la tarea de otro usuario'
        })
    }

    const taskUpdate= await task.findByIdAndUpdate(id,{ descripcion, titulo})
    
    const tareamodifificad = await task.findById(id) //para que me traiga la actualizacion actual
    
    return res.json({
        "tareaSinModificar": taskUpdate,
        "taraModificada": tareamodifificad //para que me traiga la actualizacion actual
    })
    
} catch (error) {
    console.log(error.message)
    res.send('Error al modificar la tarea')
}

}


ctrlTareas.deleteTareas=async (req,res)=>{
try {

    const id= req.params.id
    const {_id}= req.user

    console.log(_id)
    const taskAeliminar = await task.findById(id)
    
    
    
  



const tareaSinActualizar= await task.findByIdAndUpdate({_id:id},{isActive:false}) //me tira la 

const tareaEliminada= await task.findById(id)

return res.json({
     tareaEliminada 
})

    
} catch (error) {
    console.error(error.message)
    res.send('Error al eliminar la tarea')
    
}


  

        




}

module.exports =ctrlTareas;
