function valorPagoPlano(valor, idade){
    if (idade<10 && idade>0){
        return valor+80
    } else if (idade>=10 && idade<=30){
        return valor+50
    } else if (idade>30 &&idade<=60){
        return valor+95
    }
    else if(idade>60 && idade<210){
        return valor +130
    }else{
    return `idade inválida, você digitou: ${idade}`
    }
}
console.log(valorPagoPlano(100,10))