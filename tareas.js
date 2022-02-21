// REQUERIMIENTOS //

const fs = require("fs");

const tareas = require("./tareas.json");

const descripcion = process.argv[3];

const procesos = require("process");

const colores = require("colors");


// LOGS //

const acciones = ["\n1- Listar tareas existentes ->", "\n2- Crear nueva tarea ->", "\n3- Eliminar tarea deseada ->"]

const [nodeLista, nodeCrea, nodeElimina] = ["node app listar", "node app crear", "node app eliminar"]

const [listarr, crear, eliminar] = [acciones[0].yellow, acciones[1].yellow, acciones[2].yellow]

let guardarJson = (dato) => fs.writeFileSync('./tareas.json', JSON.stringify(dato,null,2),'utf-8')

// FUNCIONES //

module.exports = {
    accionesDisponibles : () =>{
            console.log("\nEsta es la lista de acciones disponible: ".green);
            console.log(listarr, nodeLista, crear, nodeCrea, '"título de la tarea"', eliminar, nodeElimina, '"título de la tarea"');
            console.log("\n----------------------------------------------------------".magenta);
            console.log("IMPORTANTE".red, "\nRecuerde especificar, luego de la acción a realizar, el título de la tarea entre comillas.")
            console.log("Todas las tareas que cree, serán almacenadas bajo el estado", "Pendiente".yellow+".");
    },

    listarTareas : () => {        
        for(let i = 0; i < tareas.length; i++) {
            const mostrarLista = [];
            mostrarLista.push(tareas[i]);

            if(`${mostrarLista[0].estado}` === "Pendiente"){
                console.log("\nID Tarea:".cyan, `${tareas[i].id}`.white, "->".red, `${mostrarLista[0].titulo.cyan}`, "->".red, "Estado:", `${mostrarLista[0].estado}`.red);
            }

            else if(`${mostrarLista[0].estado}` === "En proceso"){
                console.log("\nID Tarea:".cyan, `${tareas[i].id}`.white, "->".yellow, `${mostrarLista[0].titulo.cyan}`, "->".yellow, "Estado:", `${mostrarLista[0].estado}`.yellow);
            }

            else if(`${mostrarLista[0].estado}` === "Terminada"){
                console.log("\nID Tarea:".cyan, `${tareas[i].id}`.white, "->".green, `${mostrarLista[0].titulo.cyan}`, "->".green, "Estado:", `${mostrarLista[0].estado}`.green);                
            }                
        }
    },       
         
    crearTarea : (nuevaTarea) =>{

        let tareaYaExiste = false;

        tareas.forEach( (elm) => {

            if(elm.titulo === nuevaTarea.titulo){
                tareaYaExiste = true;
                return console.log("\nSu tarea ya se encuentra listada.".yellow);
            }

            else{
                return null;
            }
        })
            if(tareaYaExiste === false){
                tareas.push(nuevaTarea)
                guardarJson(tareas)
                return console.log("\n¡Tarea agregada!".green);                
            }         
        },

    eliminarTarea : (titulo) =>{
        if(!titulo){
            return console.log("\nDebe especificar el id o el titulo de la tarea a eliminar.".bgRed);
        }

        const tituloExiste = tareas.filter((elemento) => {
            return elemento.titulo === titulo;
        })
   
        if(tituloExiste.length > 0){
            let nuevoArray = tareas.filter((elemento) => {
                return elemento.titulo !== titulo;
            })
            fs.writeFileSync("./tareas.json", JSON.stringify(nuevoArray, null, 3));
            console.log("\nLa tarea ha sido eliminada.\n".red);
            if(tareas.length -1 === 0){
                console.log("No hay más tareas para mostrar.".yellow)
                console.log("\nPara más información, inserte".green, 'node app', "en consola.".green)
            }
            else{
                console.log(`[${tareas}]`)
            }
        }
        else{
            console.log("\nLa tarea no se encuentra.".red)
        }
    },

        /* filtrarTareas : (estado) => */

}
