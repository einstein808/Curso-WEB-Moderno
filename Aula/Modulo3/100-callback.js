const notas =[ 1.1, 9.4, 3.2,8.2]

let notasBaixar=[]
for (let i in notas){
    if (notas[i]<7){
        notasBaixar.push(notas[i])
    }
}
console.log(notasBaixar)

//callbak
notasBaixar = notas.filter(function(notas){
    return notas <7
})

const notasBaixar3 = notas.filter(notas=> notas<7) 
console.log(notasBaixar3)