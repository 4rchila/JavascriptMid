// let nombre = 'pedro'

// const promesa = new Promise((resolve,reject) => {
// if(nombre !== 'pedro') reject('el nombre no es pedro')
// else resolve(nombre)
// })

// promesa.then((resultado) =>{
//     console.log(resultado)
// }).catch((e) =>{
//  console.log(e)
// })


// of callback hell at promise

class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre
        this.instagram = instagram
    }
}
const data = [
    ['German Archila', '@Mygallery'],
    ['Oshe laboft', '@Oshe'],
    ['gutz', ],
    ['baki hanma', '@Hanma'],
    ['foshee deep', '@deep'],
]

 let personas = []
for (let i = 0; i < data.length; i++) {
  personas[i] = new Persona(data[i][0], data[i][1])
}

const obtenerPersona = (id) =>{
 return new Promise((resolve,reject) =>{
    if (personas[id] == undefined) reject('no se encuentar la persona')
    else {resolve(personas[id])}
 }) 
}
const obtenerInst = (id) =>{
    return new Promise((resolve, reject)=>{
        if (personas[id].instagram == undefined) reject('no se pudo encontrar el instagram de la persona')
        else{resolve(personas[id].instagram)}
    })
}

let id = 2;

obtenerPersona(id).then((persona) => {
    console.log(persona.nombre)
   return obtenerInst(id)
}).then((instagram) =>{
    console.log(instagram)
}).catch((e) =>{
console.log(e)
})


