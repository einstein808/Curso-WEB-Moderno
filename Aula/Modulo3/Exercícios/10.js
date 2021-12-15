function divisivel3(numero){
    let numeroIndex =String(numero);
    let soma= 0;
    for(let i =0; i<numeroIndex.length; i++){
        soma += Number(numeroIndex[i])
    }
    if(soma%3 === 0){
        return true
    }else {
        return false
    }
    
}
console.log(divisivel3(63))
