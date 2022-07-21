let alumnos = [
    {
        name: 'German Archila',
        Email: 'gerloarchbat@gmail.com',
        Matter: 'fisica cuantica'
    },
    {
        name: "O'she",
        Email: 'ice@gmail.com',
        Matter: 'matematicas de segundo grado'
    },
    {
        name: 'Labofth',
        Email: 'jon@gmail.com',
        Matter: 'quimica elemental'
    },
    {
        name: 'Johan liberto',
        Email: 'Johan@gmail.com',
        Matter: 'psicologia oscura'
    },
    {
        name: 'ayanokoji',
        Email: 'koji@gmail.com',
        Matter: 'filosofia maquivelica'
    }

];

let contenedor = document.querySelector('.grid-container')
let boton = document.querySelector('.boton')
let containerbutton = document.querySelector('.button-container')
for(let alumno in alumnos){
let data = alumnos[alumno];
let nombre = data['name'];
let Email = data['Email'];
let Matter = data['Matter'];
let htmlCode = `
<div class='grid-item name'>${nombre}</div>
<div class='grid-item Email'>${Email}</div>
<div class='grid-item Matter '>${Matter}</div>
<div class="grid-item week" > 
    <select name="weeks" class="semana-elegida">
        <option value="week 1">week 1</option>
        <option value="week 2">week 2</option>
    </select>
</div>
`
contenedor.innerHTML+= htmlCode
}

boton.addEventListener('click',()=>{
    let confirmar = confirm('¿realmente quiere confirmar la fecha?')
    if(confirmar){
        containerbutton.removeChild(boton)
        let elementos = document.querySelectorAll('.week')
        let semanas = document.querySelectorAll('.semana-elegida')
        for(elemento in elementos){
           week = elementos[elemento]
           week.innerHTML = semanas[elemento].value
        }
    }
})