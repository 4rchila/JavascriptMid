let alto = window.screen.height
let ancho = window.screen.width

let buy = confirm(`El alto de la pantalla es: ${alto} y el ancho es: ${ancho}`)

if(buy == true){
alert('compra exitosa')
}else{
alert('compra descartada')
}