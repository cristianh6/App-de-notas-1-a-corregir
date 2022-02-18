// REQUERIMIENTOS //

const process = require("process")

const {listarTareas, crearTarea, eliminarTarea} = require('./tareas');


// POSICIONAMIENTO // 

const accion = process.argv[2];

const descripcion = process.argv[3];


// CONSOLA // 

switch (accion) {
    case "listar":
        listarTareas();
        break;

    case "crear":
        if(!descripcion){
            console.log("Debe escribir un titulo.".red)
            break;
        }
        let tarea = {
            titulo : descripcion,
            estado : "Pendiente"
        }
        crearTarea(tarea);
        break;

    case "eliminar" || "-".toLocaleLowerCase:
        eliminarTarea(descripcion);
        break;

    case undefined : 
        console.log("Debes indicar una acción.".red)
        break;
    
    default:
        break;
}