# Tipos de Declarar uma função.

> function declaration.

function declaration executa um chamado mesmo com funçao declarada depois.

ja a function named expression ou function é obrigado chamar depois de uma declaração.

```javascript
console.log(soma(3,4))
function soma (x,y){
    return x+y
}
```

> Function Expression

```javascript
const sub = function(x,y){
return x-y
}
console.log(sub(3,4))
```

> named function expression .

```javascript
const mult = function mult (x,y){
    return x*y
}
```

