//DECLARO COMO STRING MI API Y LA ADENTRO EN UNA CONSTANTE
const API = 'https://rickandmortyapi.com/api/character/'
//SELECCIONO EL CONTENEDOR A INSERTAR
let escribirMain = document.querySelector(".main")

function cargarInfo(){
    fetch(API)
  .then(response => response.json())
  .then(data => console.log(data));
}  cargarInfo()