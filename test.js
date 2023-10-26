let testPasados = 0
let testTotales = 3

const suma = (num1, num2) => {
    if (!num1 && !num2) return 0
    if (typeof num1 !== "number" || typeof num2 !== "number") return null
    return num1 + num2

}

console.log("Test 1. La funcion debe devolver null si los parametros NO son numericos")
let resultTest1 = suma("2", 2)
if (resultTest1 === null) {
    console.log("Test 1 pasado")
    testPasados++
}
else console.log(`Test 1 no ha pasado, se recibio ${typeof resultTest1}, pero se esperaba NULL`)


console.log("Test 2 La funcion debe devolver 0 si no se pasó algun parametro")

let resultTest2 = suma()
if (resultTest2 === 0) {
    console.log("Test 2 pasado")
    testPasados++
}
else console.log(`Test 2 no pasado, se recibio ${resultTest2} pero se esperaba 0`)

console.log("Test 3: La funcion debe devolver la suma correctamente")

let resultTest3 = suma(3, 5)
if (resultTest3 === 8) {
    console.log("Test 3 pasado")
    testPasados++
}

else console.log(`Test 3 no pasado, se recibió ${resultTest3} pero se esperaba 5`)

/* let resultTest4 = suma(1, 2, 3, 4, 5)
if (resultTest4 === 15) {
    console.log("Test 4 pasado")
    testPasados++
}

else console.log(`Test 4 no pasado, se recibio ${resultTest4} pero se esperaba 15`) */

console.log(suma(3, 3))
if (testPasados === testTotales) {
    console.log("Todos los test fueron pasados")
}
