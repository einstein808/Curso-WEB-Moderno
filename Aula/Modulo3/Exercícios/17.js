function verAumento (salário, plano){
    switch (plano){
        case 'a':
            return `seu sálario total é ${(salário*(1+10/100)).toFixed(2)}`
            case 'b':
            return `seu sálario total é ${(salário*(1+15/100)).toFixed(2)}`
            case 'c': 
            return `seu sálario total é ${(salário*(1+20/100)).toFixed(2)}`
            default: 
            return 'plano é inválido digite a, b ou c'

    }
}
console.log(verAumento(100,'a'))
console.log(verAumento(100,'b'))
console.log(verAumento(100,'c'))
console.log(verAumento(100,'3'))