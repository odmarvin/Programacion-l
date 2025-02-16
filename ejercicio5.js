/* UN CINE OFRECE DIFERENTES PRECIOS DE ENTRADA SEGÚN LA EDAD DE LOS ESPECTADORES.
LOS MENORES DE 12 AÑOS PAGAN 5 DÓLARES,
LOS MAYORES DE 65 AÑOS PAGAN 7 DÓLARES,
Y LOS DEMÁS PAGAN 10 DÓLARES.
ESCRIBE UN PROGRAMA QUE PREGUNTE LA EDAD DEL ESPECTADOR Y CALCULE EL PRECIO DE ENTRADA. */


const edadCliente = parseInt(prompt("Ingrese la edad del cliente"))
if (edadCliente < 12) {
	alert("Debe pagar 5 dólares por su entrada")
}else if (edadCliente > 65) {
	alert("Debe pagar 7 dólares por su entrada")
}else {
	alert("Debe pagar 10 dólares por su entrada")
}