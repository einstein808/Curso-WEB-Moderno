function verTriangulo (lado1 =1, lado2 =1, lado3 =1){
    if(lado1 ===lado2 && lado3 === lado2){
        return "tringulo equilatero."
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 ===lado3){
        return "tringulo isoceles."
    } else {return "tringulo escaleno"} 
}
console.log(verTriangulo(23,23,23))
console.log(verTriangulo())