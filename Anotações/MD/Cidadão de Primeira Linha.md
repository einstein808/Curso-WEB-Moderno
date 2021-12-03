# Table Of Contents.

1. [Funções de Primeira Linha.](#funções-de-primeira-linha.)
2. [Parametros e Retornos são opcionais.](#parâmetros-e-retorno-são-opcionais)
3. [Parâmetro Padrão](#parâmetro-padrão)
4. [this pode variar.](#this-pode-variar.)
5. [Funcão bind.](#funcão-bind.)



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


[para cima](#table-of-contents.)

#  Parâmetros e Retorno São Opcionais🙃

Paremetros pode ser passados quantos você quiser.
Pode ter paremetros variáveis.

exemplo a abaixo mostra que você pode ter uma função que não nenhum parametro mais pode passar parametros.

> pode recuperar os parâmetros através de uma propriedade chamada **Arguments.** 

```javascript
function soma (){}
//nao tem nenhum paramentro dentro do ()
//mais cria os parametros atibuido argumente dentro da funcao.
```

```javascript
function soma (){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
return soma
}
```

o caso acima criar um for in para percorrer argumente e atribui o valor de argumente a funcao soma.

```javascript
console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1, 2.2, "teste"))
// assim voce pode passar os argumentos dentro (), sem antes ter sido declarados na criacao.

```

> esse ja tem uma operadore responsavel para fazer esse tipo de operacao
> rest e espred.

 [aula90-módulo3-Parâmetros-variaveis.js](../../Aula./Modulo3/aula90-módulo3-Parâmetros-variaveis.js) 

[para cima](#table-of-contents.)

# Parâmetro Padrão🦧

* 1️⃣ Primeira estratégia para gerar um valor padrao é criar o valor `||`

  ```javascript
  function soma1(a,b,c) {
      a=b || 1
      b=b || 1
      c=c || 1
      return a+b+c
  }
  ```

  essa funcao retorna a soma, mais acontece se colocar valor de abc= 0 ele retorna 3 ja que zero é falso.

  ```javascript
  console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))
  //resultado de (0,0,0) = 3
  // pois 0 é falso e ele atribui o 1.
  ```

*  2️⃣estratégia é usar o operador ternário, para caso o valor for somente indefinido.

  ```javascript
  function soma2(a,b,c){
      a=a !== undefined ? a: 1
      b = b in a arguments ? b:1
      c = isNaN(c) ? 1:c
      //melhor estratégia é a terceira ja que qualquer valor diferente de numero vai ser valor padrao.
  }
  ```

* versao mais elegante seria 

  ```javascript
  function soma3 (a = 1, b = 1, c = 1){
      return a +b + c
  }
  console.log(soma3(1,0,0))
  ```

* versao mais segura seria.🏆️

  ```javascript
  c = isNaN(c) ? 1:c
      //melhor estratégia é a terceira ja que qualquer valor diferente de numero vai ser valor padrao.
  ```

  > estratégia mais uitlizada ainda seria o `||`

  abaixo segue o código para teste.


 [91-modulo3-parametroPadrao.js](../../Aula./Modulo3/91-modulo3-parametroPadrao.js) 

[para cima](#table-of-contents.)

# this pode variar.

* voce pode criar um objeto apatir de uma classe.

* this ele referencia quem é o dono do elemento.

  > javascript pode variar.

##### this sempre é o objeto que está no contesto de execucao

```javascript
function f1(){
    console.log(this === window)
}
f1()
//nesse caso onde function esta sendo executado no contesto global
// retornar true
```

isso custuma gerar muita confusão.🤔

* **Arrow function teve dois motivos para ser criada.**
  * é ter um this que nao varia
  * e diminuir sintax.

 [aula92-thisPodeVariar.js](../../Aula./Modulo3/aula92-thisPodeVariar.js) 

[para cima](#table-of-contents.)

### Funcão bind.

* criando uma funcao abaixo, quando executar pessoa.falar vai retornar bom dia.

```javascript
const pessoa ={
    saudacao:'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
```

no segundo cenário vai atribuir um valor para variavel global e se tentar execuar vai dar undifined.

ja que constesto dessa variável é diferendo do contesto anterior.

```javascript
pessoa.falar()
console.falar = pessoa.falar
falar() // condlito entre paradigmas:funcional e oo
```

Para resolver isso existe o bild onde voce pode setar a referencia do this.

```javascript
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
```



[93-modulo3-Build.js](../../Aula./Modulo3/93-modulo3-Build.js) 

[aula93-thisPodeVariar.js](../../Aula./Modulo3/aula93-thisPodeVariar.js) 

[para cima](#table-of-contents.)

