let boton = document.querySelector('.button')

boton.addEventListener('click',saludar)

function saludar(){
    alert('hola')
}


addEventListener('unload',()=>{
    console.log('te estas por ir del sitio')
})

addEventListener('resize',()=>{
    console.log('a cambiado la resolucion del la pantalla')
})

addEventListener('scroll',()=>{
    console.log('has echo scroll en la pantalla')
})

let texto = document.querySelector('.container')
let inut = document.querySelector('.input')

addEventListener('keydown',(evento) =>{
    let tecla = evento.key
    let teclas = 'la ultima tecla presionada fue la ' + tecla 
    texto.innerHTML = teclas
})


setTimeout(()=>{
    document.write('hola')
},2000)