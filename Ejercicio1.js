/*UNA TIENDA OFRECE DESCUENTOS SEGÚN EL MONTO DE LA COMPRA REALIZADA.
SI EL MONTO ES MAYOR O IGUAL A 100 DÓLARES, SE APLICA UN DESCUENTO DEL 10%.
SI EL MONTO ES MAYOR O IGUAL A 200 DÓLARES, SE APLICA UN DESCUENTO DEL 20%.
SI EL MONTO ES MENOR A 100 DÓLARES, NO HAY DESCUENTO.
ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.*/

const montoCompra = parseInt(prompt("Ingrese el monto de compra"))
let montoResultante = 0

if (montoCompra >= 100 && montoCompra < 200) {
	montoResultante = montoCompra * 0.90
}else if (montoCompra >= 200) {
	montoResultante = montoCompra * 0.80
}else{
	montoResultante = montoCompra
}

alert("El monto total a pagar es: " + montoResultante)