# Funções Anonimas.

* funções anonimas sao funções sem nomes.

* são usadas como paramentros para outras funções ou objetos.

  ```javascript
  const soma = function(x,y){
      return x + y
  } 
  const imprimirResultado = function (a, b, operacao = soma){
      console.log(operacao(a,b))
  } //operacao recebe a funcao default que é uma varialvel soma.
  
  ```

  

Código abaixo mostra atribuiçao de funcao.

```javascript
imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function (x,y){
    return x-y
})
imprimirResultado(3,4,(x,y) => x*y) // arrow function ja é por padrao, anonima.
```

Pode ser passada dentro de objetos.

```javascript
const pessoa = {
    falar: funtion(){
        console.log('opa')
    }
}
```

