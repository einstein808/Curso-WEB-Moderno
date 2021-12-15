function resolverBaskara(ax2,bx,c){
    let delta = (bx**2)-4*ax2*c;
    if (delta<0){
        return `delta nao pode ser negativo delta:${delta}`
    }else{
    let valorDeltaNegativo =(Math.sqrt(delta))*-1;
    let valorDeltaPositivo = (Math.sqrt(delta))*1;
    let valorDex1 = (-bx+(valorDeltaPositivo))/(2*ax2);
    let valorDex2 = (-bx+(valorDeltaNegativo))/(2*ax2);
    let resultado= [valorDex1,valorDex2]
    return `Resultado é x1: ${resultado[0].toFixed(4)}
    x2: ${resultado[1].toFixed(4)}`}
    
}
    
console.log(resolverBaskara(2,2,-144))
