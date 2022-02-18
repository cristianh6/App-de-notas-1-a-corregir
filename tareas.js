// REQUERIMIENTOS //


const fs = require("fs");

const tareas = require("./tareas.json");

const descripcion = process.argv[3];

const procesos = require("process");

const colores = require("colors");


// FUNCIONES //

module.exports = {
    listarTareas : () =>{
        const element = []
        for(let i = 0; i <= tareas.length; i++){
            element.push(tareas[i]);
            console.log(tareas);
        }
    },
    
    crearTarea : (tarea) =>{
        let tareaYaExiste = false;
        tareas.forEach( (elm) => {
            if(elm.titulo === tarea.titulo){
                tareaYaExiste = true;
                return console.log("Su tarea ya se encuentra listada.".green);
            }
            else{
                return null;
            }
    }
        )
        if(tareaYaExiste === false){
            tareas.push(tarea);
            fs.writeFileSync("./tareas.json", JSON.stringify(tareas, null, 3));
            console.log("Tarea agregada!".green);
            return tareas;
        }        
    },

    eliminarTarea : (titulo) =>{
        if(!titulo){
            return console.log("Debe introducir un titulo.".red)
        }
        const tituloExiste = tareas.filter( (elemento) => {
            return elemento.titulo === titulo;        
        })
   
        if(tituloExiste.length > 0){
            const nuevoArr = tareas.filter( (elemento) => {
                return elemento.titulo !== titulo;
        })        
            
            fs.writeFileSync("./tareas.json", JSON.stringify(nuevoArr, null, 3));
            return console.log(nuevoArr);
        }else{
            return console.log("El titulo no existe.".red)
        }
    }
}