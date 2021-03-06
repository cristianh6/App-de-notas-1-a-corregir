// REQUERIMIENTOS //

const process = require("process".toLowerCase());
const tareas = require("./tareas");

const {listarTareas, crearTarea, eliminarTarea, accionesDisponibles, filtrarTareas} = require('./tareas');


// POSICIONAMIENTO // 

const accion = process.argv[2];

const descripcion = process.argv[3];


// CONSOLA // 

switch (accion) {
    case "listar".toLocaleLowerCase():
        listarTareas();
        break;

    case "crear".toLocaleLowerCase():
        if(!descripcion){
            console.log("\nDebe escribir un título para la tarea a crear.".bgRed)
            break;
        }
        const nuevaTarea = {
            id : new Date().getTime(),
            titulo : descripcion,
            estado : "Pendiente"
        }
        crearTarea(nuevaTarea);   
        break;        

    case "eliminar".toLocaleLowerCase():
        eliminarTarea(descripcion);        
        break;

    case "filtrar".toLocaleLowerCase():
        if(!descripcion){
            console.log("\nDebe especificar el estado que desea filtrar.".bgRed)
            break;
        }
        filtrarTareas();
        break;

    case undefined : 
        console.log("¡Bienvenido a su Aplicación de tareas!".bgYellow.black);
        console.log("\nDebe indicar una acción a realizar.".red);
        accionesDisponibles();        
        break;
    
    default:
        break;
}