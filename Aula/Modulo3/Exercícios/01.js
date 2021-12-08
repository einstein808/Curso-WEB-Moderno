function calculo(x =1 ,operador = '+',y =1){
    if (operador ==='+'){
        return x +y
    }else if(operador=="-"){
        return x-y
    }
    else if(operador ==='*'){
    return x*y} else{
       return "Digite um operador válido. (+ - *)"
    }
}
console.log(calculo(22, "-", 33))