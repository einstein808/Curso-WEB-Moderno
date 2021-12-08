function dividir(valor1,valor2){
 let resultado = valor1/valor2;
 let resto = valor1 %valor2;
 return `resultado:${Math.floor(resultado)} resto:${resto}`
}
console.log(dividir(4,3))