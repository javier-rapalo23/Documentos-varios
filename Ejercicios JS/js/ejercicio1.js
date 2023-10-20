//Javier Alejandro Orellana Rápalo - 20192001429

const arreglo=[1,2,3,4,5,6]
//1. Dado el array = [1,2,3,4,5,6] \n a) Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla
console.log('1.A')


for (let i = 0; i < arreglo.length; i++  ){
    console.log(arreglo[i])
}
//b) Iterar por todos los elementos dentro de un array utilizando .map y mostrarlos en pantalla
console.log('\n 1.B')

const arregloMap = arreglo.map(
function iterearmap(num){
    console.log(num)
})
//c) Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
console.log('\n 1.C')

const arrax = arreglo.map(
    function _arrax(num){
        num += 1
        console.log(num)
    }

)

// d) Generar una copia de un array pero con todos los elementos incrementado en 1
console.log('\n 1.D')

let d = arreglo.slice();

const arrayD = arreglo.map(
    function _d(num){
        num += 1
        console.log(num)
    }
)
// e) Calcular el promedio de los valores del arreglo
console.log('\n 1.E')
let sumatoria = arreglo.reduce((prev, current) => prev + current);
console.log(sumatoria / arreglo.length);







