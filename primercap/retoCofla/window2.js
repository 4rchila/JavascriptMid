let Protocolo = window.location.protocol
let href = window.location.href
let HostName = window.location.hostname
let  PathName = window.location.pathname


let writen1 = document.querySelector('.parrafo1')
let writen2 = document.querySelector('.parrafo2')
let writen3 = document.querySelector('.parrafo3')
let writen4 = document.querySelector('.parrafo4')

writen1.innerHTML = `Protocolo: ${Protocolo} <br>`
writen2.innerHTML = `href: ${href} <br>`
writen3.innerHTML = `hostname: ${HostName} <br>`
writen4.innerHTML = `pathname: ${PathName} <br>`
