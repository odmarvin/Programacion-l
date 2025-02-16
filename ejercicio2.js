/* UNA EMPRESA OFRECE UN BONO DE PRODUCTIVIDAD A SUS TRABAJADORES,
DEPENDIENDO DEL NÚMERO DE UNIDADES PRODUCIDAS EN UN MES.
SI SE PRODUCEN MÁS DE 100 UNIDADES, SE OTORGA UN BONO DEL 5% DEL SALARIO.
SI SE PRODUCEN MÁS DE 200 UNIDADES, SE OTORGA UN BONO DEL 10% DEL SALARIO.
SI SE PRODUCEN MENOS DE 100 UNIDADES, NO HAY BONO.
ESCRIBE UN PROGRAMA QUE CALCULE EL BONO A OTORGAR Y MUESTRE EL SALARIO TOTAL A RECIBIR. */


let bonoProductividad = 0
let bonoPorcentual = 0
const salario = parseInt(prompt("Ingrese el salario"))
const unidadesProducidas = parseInt(prompt("Ingrese las unidades producidas del mes"))
if (unidadesProducidas > 100 && unidadesProducidas <= 200) {
	bonoProductividad = (salario * 0.05) + salario
	bonoPorcentual = "5%"
}else if (unidadesProducidas > 200) {
	bonoProductividad = (salario * 0.10) + salario
	bonoPorcentual = "10%"
}else {
	bonoProductividad = salario
}
alert("El bono otorgado es: " + bonoPorcentual + " Y el salario total:" + bonoProductividad)
