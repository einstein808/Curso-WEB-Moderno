let jurosSimples =(cI,tJ,tempo) =>(cI*(tJ/100)*tempo)+cI;
console.log(jurosSimples(1000,4.5,300))

let jurosCompostos =(cI,tJ,tempo) =>cI*(1+(tJ/100))**tempo;
console.log(Math.floor(jurosCompostos(1000,4.5,65)))