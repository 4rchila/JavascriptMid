const Name = document.getElementById('Name');
const Email = document.getElementById('Mail');
const Matter = document.getElementById('Matter');
const resultado = document.querySelector('.resultado');

function solicitud(event){
    event.preventDefault()
let error = validarcampos()
if(error[0]){
resultado.innerHTML = error[1]
resultado.classList.add('bad')
}else{
    resultado.innerHTML= 'Solicitud enviada correctamente'
    resultado.classList.add('green')
    resultado.classList.remove('bad')
}
}

const validarcampos = () =>{
    let error = []
    if(Name.value.length < 5){
        error[0] = true;
        error[1] = 'El nombre que a colocado no es valido';
        return error;

    }else if(Name.value.length > 40){
error[0] = true
error[1] = 'El nombre no puede contener mas de 40 caracteres'
return error

    }else if(Email.value.length < 5 || Email.value.length > 30 || Email.value.indexOf('@') == -1 || Email.value.indexOf('.') == -1){
      error[0] = true;
      error[1] = 'El email no es valido'
      return error

    }else if(Matter.value.length < 4 || Matter.value > 40){
      error[0] = true;
      error[1] = 'La materia no es valida'
      return error;
    }

    error [0] = false
    return error
}