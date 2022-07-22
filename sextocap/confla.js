const materiasHtml = document.querySelector('.materias')

const materias = [
    {
        nombre: 'Fisica 4',
        nota: 7
    },
    {
        nombre: 'Quimica 8',
        nota: 8
    },
    {
        nombre: 'Programacion python',
        nota: 9
    },
    {
        nombre: 'data base',
        nota: 7
    },
    {
        nombre: 'machine learning',
        nota: 8
    },
]
const obtenerMateria = (id)=>{
 return new Promise((resolve,reject) =>{
  let materia = materias[id]
  if(materia == undefined) reject('la materia no existe')
  else setTimeout(() =>{resolve(materia)},Math.random()*1400
  )
 })
}

const devolverMaterias = async () =>{
    let materia = []
    for (let i = 0; i < materias.length; i++) {
       materia[i] = await obtenerMateria(i);
        let newHTMLcode = `
        <div class="materia">
          <div class="nombre">${materia[i].nombre}</div>
          <div class="nota">${materia[i].nota}</div>
        </div>
        `
        materiasHtml.innerHTML += newHTMLcode
    }
}
devolverMaterias()