function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//estratégia 2,3, e 4 para gerar valor padrao.
function soma2(a,b,c){
    a=a !== undefined ? a: 1
    b = b in  arguments ? b:1
    c = isNaN(c) ? 1:c
    //melhor estratégia é
    // a terceira ja que qualquer valor diferente de numero vai ser valor padrao.
    return a+b+c
}

console.log(soma2(), soma2(1,2,"testo"), soma2(1,2,3), soma2(0,0,0))

function soma3 (a = 1, b = 1, c = 1){
    return a +b + c
}
console.log(soma3(1,0,"testo"))
