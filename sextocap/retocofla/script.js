//un callback es una funcion dentro de otra funcion
//o una funcion a la que se le pasa como parametro otra funcion


//las funciones flecha solo devuelve algo cuando son de una sola linea

class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre
        this.instagram = instagram
    }
}
const data = [
    ['German Archila', '@Mygallery'],
    ['Oshe laboft', '@Oshe'],
    ['gustav', '@gustav'],
    ['baki hanma', '@Hanma'],
    ['foshee deep', '@deep'],
]

 let personas = []
for (let i = 0; i < data.length; i++) {
  personas[i] = new Persona(data[i][0], data[i][1])
}

const obtenerPersona = (id, callback) =>{
 if(personas[id] == undefined){
    callback('no se a encontrado la persona')
 } else{
    callback(null,personas[id],id)
 }
}

obtenerPersona(0, (err,persona,id)=>{
    if (err){
      console.log(err)
    }else{
        console.log(persona.nombre)
        obtenerInst(id,(err, instagram) =>{
            if(err){
                console.log(err)
            }else{
                console.log(instagram)
            }
        })
    }
})

const obtenerInst = () =>{
    if(personas[id].instagram == undefined){
        callback('no se a encontradoel instagram')
     } else{
        callback(null,personas[id].instagram)
     }
}