// REQUERIMIENTOS //


const fs = require("fs");

const tareas = require("./tareas.json");

const descripcion = process.argv[3];

const procesos = require("process");

const colores = require("colors");

// LOGS //

const acciones = ["\n1- Listar tareas existentes ->", "\n2- Crear nueva tarea ->", "\n3- Eliminar tarea deseada ->"]

const [nodeLista, nodeCrea, nodeElimina] = ["node app listar", "node app crear", "node app eliminar"]

const [listar, crear, eliminar] = [acciones[0].yellow, acciones[1].yellow,acciones[2].yellow]


// FUNCIONES //

module.exports = {
    accionesDisponibles : () =>{
            console.log("\nEsta es la lista de acciones disponible: ".green);
            console.log(listar, nodeLista, crear, nodeCrea, '"título de la tarea"', eliminar, nodeElimina, '"título de la tarea"');
            console.log("\n----------------------------------------------------------".magenta);
            console.log("IMPORTANTE".red, "\nRecuerde especificar, luego de la acción a realizar, el título de la tarea entre comillas.")
            console.log("Todas las tareas que cree, serán almacenadas bajo el estado", "Pendiente".yellow+".");
    },
    
    listarTareas : ((mostrarLista) => {
        for(let i = 0; i <= tareas.length; i++){
            if(mostrarLista){
                mostrarLista.push(tareas[i])
                return console.log(`${tareas[mostrarLista]}`)
                
            }else if(!i){
                console.log("No hay tareas para mostrar")
                return null
            }
        }
    }),
    
    crearTarea : (tarea) =>{

        let tareaYaExiste = false;
        tareas.forEach( (elm) => {
            if(elm.titulo === tarea.titulo){
                tareaYaExiste = true;
                return console.log("\nSu tarea ya se encuentra listada.".yellow);
            }
            else{
                return null;
            }
    }
        )
        if(tareaYaExiste === false){
            tareas.push(tarea);
            fs.writeFileSync("./tareas.json", JSON.stringify(tareas, null, 3));
            console.log("\nTarea agregada!".green);
            return tareas;
        }        
    },

    eliminarTarea : (titulo) =>{
        if(!titulo){
            return console.log("\nDebe especificar la tarea a eliminar.".bgRed)
        }
        const tituloExiste = tareas.filter( (elemento) => {
            return elemento.titulo === titulo;        
        })
   
        if(tituloExiste.length > 0){
            const nuevoArr = tareas.filter( (elemento) => {
                return elemento.titulo !== titulo;
        })        
            
            fs.writeFileSync("./tareas.json", JSON.stringify(nuevoArr, null, 3));
            console.log("\nLa tarea ha sido eliminada.\n".red);
            if(tareas ){
                return "asdasd"
            }
            
        }else{
            return console.log("\nLa tarea no se encuentra.".red)
        }
    }
}
