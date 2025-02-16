/* UNA TIENDA DE ROPA TIENE DIFERENTES PROMOCIONES SEGÚN LA CANTIDAD DE PRENDAS COMPRADAS.
SI SE COMPRAN MÁS DE 3 PRENDAS, SE APLICA UN DESCUENTO DEL 10% EN EL TOTAL DE LA COMPRA.
SI SE COMPRAN MÁS DE 5 PRENDAS, SE APLICA UN DESCUENTO DEL 20% EN EL TOTAL DE LA COMPRA.
SI SE COMPRAN MENOS DE 3 PRENDAS, NO HAY DESCUENTO.
ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR. */

let montoTotal = 0
const precioUnitario = parseInt(prompt("Ingrese el precio unitario"))
const cantidadPrendas = parseInt(prompt("Ingrese la cantidad de prendas"))

if (cantidadPrendas > 3 && cantidadPrendas <= 5) {
	montoTotal = (precioUnitario * cantidadPrendas) * 0.9
}else if (cantidadPrendas > 5) {
	montoTotal = (precioUnitario * cantidadPrendas) * 0.80
}else{
	montoTotal = precioUnitario * cantidadPrendas
}

alert("El monto total a pagar es: " + montoTotal)