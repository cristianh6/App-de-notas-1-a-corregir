// REQUERIMIENTOS //

const process = require("process");
const tareas = require("./tareas");

const {listarTareas, crearTarea, eliminarTarea, accionesDisponibles} = require('./tareas');


// POSICIONAMIENTO // 

const accion = process.argv[2];

const descripcion = process.argv[3];


// CONSOLA // 

switch (accion) {
    case "listar".toLocaleLowerCase() :
        listarTareas();
        break;

    case "crear".toLocaleLowerCase() :
        if(!descripcion){
            console.log("\nDebe escribir un título para la tarea a crear.".bgRed)
        }
        crearTarea(tareas);   
        break;
        

    case "eliminar".toLocaleLowerCase() :
        eliminarTarea(descripcion);
        
        break;

    case undefined : 
        console.log("¡Bienvenido a su Aplicación de tareas!".bgYellow.black);
        console.log("\nDebe indicar una acción a realizar.".red);
        accionesDisponibles();        
        break;
    
    default:
        break;
}