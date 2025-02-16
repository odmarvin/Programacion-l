/* UN PROFESOR CALIFICA A SUS ESTUDIANTES SEGÚN LA SIGUIENTE ESCALA:
0-59 PUNTOS ES UNA CALIFICACIÓN DE F,
60-69 PUNTOS ES UNA CALIFICACIÓN DE D,
70-79 PUNTOS ES UNA CALIFICACIÓN DE C,
80-89 PUNTOS ES UNA CALIFICACIÓN DE B,
Y 90-100 PUNTOS ES UNA CALIFICACIÓN DE A.
ESCRIBE UN PROGRAMA QUE PREGUNTE LA NOTA DEL ESTUDIANTE Y MUESTRE SU CALIFICACIÓN */

const nota = parseInt(prompt("Ingresa la nota del estudiante:"))

if (nota <= 59) {
	alert("La calificación es: F")
} else if (nota >= 60 && nota <= 69) {
	alert("La calificación es: D")
} else if (nota >= 70 && nota <= 79) {
	alert("La calificación es: C")
} else if (nota >= 80 && nota <= 89) {
	alert("La calificación es: B")
} else if (nota >= 90 && nota <= 100) {
	alert("La calificación es: A")
} else {
	alert("Ingresa un valor entre 0 y 100.")
}