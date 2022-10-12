
const task = require("../models/tareas")

const ctrlTareas={}

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlTareas.getTareas = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const tareas = await task.find({active:true});

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(tareas)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrlTareas.postTareas = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { fecha, categoria, descripcion, titulo } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newTarea = new task({
        fecha,
        categoria,
        descripcion,
        titulo
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
