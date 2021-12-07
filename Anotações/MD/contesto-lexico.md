# Contesto Léxico.

* Closure é o escopo criado quando uma funçào é declarada e nao onde é executada.

* função guarda na memória onde foi criada.

* esse escopo permite a função acessar e  manipular variáveis externas à função.

  ```javascript
  const x = 'Global'
  function fora(){
      const x = "local"
      function dentro (){
          return x
      }
      return dentro
  }
  const minhaFuncao = fora ()
  console.log(minhaFuncao())
  // no caso cima retorna local, pq minha funcao esta com parametro fora e a varialvel x
  //recebe o valor local, pois onde variavel foi criada e esta sendo acessada.
  ```

  

 [105-closure.js](../../Aula./Modulo3/105-closure.js)  [104-contesto-lexico.js](../../Aula./Modulo3/104-contesto-lexico.js) 
