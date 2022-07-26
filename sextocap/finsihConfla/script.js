const getInfo = async () =>{
    let aprobado = document.querySelector(".num-aprobados") 
    let desaprobado = document.querySelector(".num-desaprobados")
try{
    resultado = await axios('informacion.txt')
 aprobado.innerHTML = resultado.data.aprobados
 desaprobado.innerHTML = resultado.data.desaprobados
}catch(e){
    aprobado.innerHTML = 'La API Fallo'
    desaprobado.innerHTML = 'La API fallo' 
}
}

document.getElementById('getInfo').addEventListener('click',getInfo)