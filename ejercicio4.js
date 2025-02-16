/* UNA COMPAÑÍA DE SEGUROS OFRECE DIFERENTES TIPOS DE PÓLIZAS,
CON DIFERENTES COBERTURAS Y PRECIOS.
LA PÓLIZA BÁSICA TIENE UNA COBERTURA DEL 50% Y UN PRECIO DE 50 DÓLARES.
LA PÓLIZA INTERMEDIA TIENE UNA COBERTURA DEL 75% Y UN PRECIO DE 75 DÓLARES.
LA PÓLIZA PREMIUM TIENE UNA COBERTURA DEL 100% Y UN PRECIO DE 100 DÓLARES.
ESCRIBE UN PROGRAMA QUE PREGUNTE AL USUARIO QUÉ TIPO DE PÓLIZA DESEA Y CALCULE EL PRECIO TOTAL A PAGAR. */


const tipoPoliza = prompt("Ingrese su tipo de póliza: Básica, Intermedia o Premium").toLowerCase()
if (tipoPoliza == "basica") {
	alert("Su poliza tiene un precio de 50 dolares")
}else if (tipoPoliza == "intermedia") {
	alert("Su poliza tiene un precio de 75 dolares")
}else if (tipoPoliza == "premium") {
	alert("Su poliza tiene un precio de 100 dolares")
}else {
	alert("No ingreso una poliza del catalogo")
}