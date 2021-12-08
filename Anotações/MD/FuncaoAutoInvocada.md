# funcao auto(invocada)

* serve para fugir de um escopo mais abrangente.

* foge do escopo global.

  ```javascript
  (function(){
  console.log('será exibido imediatamente')
  console.log('foge do escopo abrangente.')
  })()
  ```

  