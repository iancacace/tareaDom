


document.addEventListener ('DOMContentLoaded', function () {

const contenedor = document.querySelector('.container')
const casilla = document.querySelector('#edad')
const botonEnviar = document.querySelector('#boton')


	botonEnviar.onclick = function() {mayorMenor()}

	casilla.onkeypress = function(event) {
		 if (event.key === 'Enter') {
				mayorMenor()
			}
	}




	function mayorMenor() {
		 const edad = casilla.value
		 carteles()
	// soloNumeros()
		 if (isNaN(edad)) {
			eliminarElemento()
			contenedor.prepend(cartelGris)
			} else if (edad < 18) {
				eliminarElemento()
				contenedor.prepend(cartelRojo)
				}  else {
					eliminarElemento()
					contenedor.prepend(cartelVerde)
					}

		function carteles(){
			cartelRojo = document.createElement('div')
			cartelRojo.innerHTML = 'Usted no cumple con la edad requerida'
			cartelRojo.classList.toggle('rojo')
			cartelRojo.style = 'font-size: 25px; text-align: center; height: 15%; width: 25%; margin: 5px; border: 2px solid #000; background: red; position: absolute; top: 50%; left: 35%; text-transform: capitalize; line-height: 100px;'
			
			cartelVerde = document.createElement('div')
			cartelVerde.innerHTML = 'Bienvenido!'
			cartelVerde.classList.toggle('verde')
			cartelVerde.style = 'font-size: 35px; text-align: center; height: 15%; width: 15%; margin: 5px; border: 2px solid #000; background: green; position: absolute; top: 50%; left: 38%; text-transform: capitalize; line-height: 100px;'
			
			cartelGris = document.createElement('div')
			cartelGris.innerHTML = 'debe ingresar un numero!'
			cartelGris.classList.toggle('gris')
			cartelGris.style = 'font-size: 35px; text-align: center; height: 15%; width: 22%; margin: 5px; border: 2px solid #000; background: #eee; position: absolute; top: 50%; left: 35%; text-transform: capitalize; line-height: 100px;'
			}

		function eliminarElemento() {
			if (edad != '') {
			contenedor.removeChild(contenedor.childNodes[0])
			}
		}

	/*	function soloNumeros() {
			if (edad === NaN) {
				contenedor.prepend(cartelGris)
			}
		}

		*/



	}




	






})

