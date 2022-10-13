
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

    const {fecha,categoria, descripcion, titulo}= req.body;

    const taskUpdate= await task.findByIdAndUpdate(id,{fecha,categoria, descripcion, titulo})
    
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

    let idTareas=req.params.id

    try {
        await task.findByIdAndUpdate(idTareas,{active:false})
        return res.json('Tarea  eliminada ')
        

    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg:'error al eliminar la tarea'
        })
    }


}

module.exports =ctrlTareas;
