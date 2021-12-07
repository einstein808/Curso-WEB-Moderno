# Funcoes Anonimas.

* Chamar de volta. 

* padrao de projeto mais utilizado na web observer.
  voce usa uma funçao caso ocorra algum evento chama a funcao de volta.

  ```javascript
  const fabricantes =["mercedes", "audio", "bmw"]
  function imprimir(nome, indice){
      console.log(`${indice +1},${nome}`)
  }
  fabricantes.forEach(imprimir)
  fabricantes.forEach(fabricantes => console.log(fabricantes))
  ```

  cada vez que atulizar chamar um indice executa a façao arrow abaixo.

  invez de fazer um for ou um for in, pode criar uma funcao que ela executa indice por indice.

  ```javascript
  const notas =[ 8.8, 9.4, 3.2,8.2]
  
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
  //coloca uma função como parâmetro.
  ```

  essa função com filter percorre um array inteiro.

 [100-callback.js](../../Aula./Modulo3/100-callback.js)  [99--callbakc.js](../../Aula./Modulo3/99--callbakc.js)  [101-callback.js](../../Aula./Modulo3/101-callback.js) 

