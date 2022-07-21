const sendButton = document.getElementById('button')

let resultado,mensaje;

sendButton.addEventListener('click',()=>{
    try{
       prevRest = parseInt(document.getElementById('nota').value)
       if(isNaN(prevRest)){
        throw 'gracioso'
       }
       mensaje = definirMensaje(prevRest)
       resultado = verificarAprobacion(8,4, prevRest)
    }catch(e){
        resultado = 'te haces el gracioso'
        mensaje = 'hacker'

    }
    abrirModal(resultado,mensaje)
})


const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
      case 1: resultado = 'Enserio';
      break;
      case 2: resultado = 'Se encuentra perdido';
      break;
      case 3: resultado = 'Muy mal';
      break;
      case 4: resultado = 'su resultado es el correcto';
      break;
      case 5: resultado = 'Mal';
      break;
      case 6: resultado = 'Necesita mejorar';
      break;
      case 7: resultado = 'Perfecto';
      break;
      case 8: resultado = 'Magnifico';
      break;
      case 9: resultado = 'Exelente';
      break;
      case 10: resultado = 'Usted esta destinado a la grandeza';
      break;
      default: resultado = null
    }
    return resultado
}

const verificarAprobacion = (nota1, nota2,prevRest)=>{

let promedio = (nota1 + nota2 + prevRest)/3
    if(promedio >= 7){
 
return 'APROBADO'
}
return 'DESAPROBADO'
}

const abrirModal = (res,msg)=>{
document.querySelector('.resultado').innerHTML = res
document.querySelector('.mensaje').innerHTML = msg
let modal = document.getElementById('modal-background')
modal.style.display = "flex";
modal.style.animation = "aparecer 1s forwards"
}

