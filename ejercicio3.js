/* UN RESTAURANTE OFRECE DESCUENTOS A LOS CLIENTES SEGÚN LA EDAD.
LOS MENORES DE 12 AÑOS TIENEN UN DESCUENTO DEL 50% EN SU CONSUMO.
LOS MAYORES DE 65 AÑOS TIENEN UN DESCUENTO DEL 25% EN SU CONSUMO.
LOS CLIENTES ENTRE 12 Y 65 AÑOS NO TIENEN DESCUENTO.
ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR. */

let total = 0
const subTotal = parseInt(prompt("Ingrese el total de la factura"))
const edadCliente = parseInt(prompt("Ingrese la edad del cliente"))
if (edadCliente < 12) {
	total = subTotal * 0.5
}else if (edadCliente > 65) {
	total = subTotal * 0.75
}else {
	total = subTotal
}
alert("Su total a pagar es :" + total)