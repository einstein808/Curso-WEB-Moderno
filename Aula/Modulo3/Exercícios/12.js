function fatorial(numero){
    let resultado = numero;
    for (let index = 1; index < numero; index++) {
         resultado *= index;
        
    }return resultado
}
console.log(fatorial(5))