# Table Of Contents.

1. [Funções de Primeira Linha.](#Funções de primeira linha.)
2. [Parametros e Retornos são opcionais.](#Parâmetros e Retorno São Opcionais)
3. 

<a name = "Funções de primeira linha."/>

# Funções de primeira linha.



> função em js é first - class object
>
> higher-order function.

* Pode ser criada de forma literal.

  ```javascript
  function fun1() {}
  ```

* Armazena em uma variável.

  ```javascript
  const fun2 = function (){}
  ```

* Armazenar em um array.

  ```javascript
  const array = [funtion(a,b){return a + b}, fun1, fun2]
  ```

* Armazenar em um atributo de um objeto.

  ```javascript
  const obj = {}
  obj.falar = function(){return 'opa'}
  console.log(obj.falar())
  ```

* Passar função como parametro.

  ``` javascript
  function run (fun){
      fun()
  }
  run(function(){console.log("executantos....")})
  ```

* uma função pode retornar/conter uma função

  ```javascript
  function soma(a,b){
      return function (c) {
          console.log (a+b+c)
      }
  }
  soma(2,3)(4)
  ```

  



#  Parâmetros e Retorno São Opcionais

