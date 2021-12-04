#  Arrow Function

* Function arrow **é sempre uma função anonima.**

  ```javascript
  dobro = (a) => {
      return2*a
  }
  ```

  * não vem declarado a palavra function.

* Tem como reduzir mais.

  ```javascript
  dobro = a => 2*a
  //onde o retorno é implicito.
  // serve para apenas uma linha.
  ```

  * São funções muitos uteis de apenas uma linha, com sintaxe bem reduzida.

    > se colocar um bloco de função**{}** obrigatóriamente tem que colocar return.

* funções sem parametros podem ser criadas.

* ```
  ola =() => 'olá'
  ola = _ => 'olá' // possui paramtero.
  ```

* Funcão arrow o this nao varia de quem está chamado.

  ```javascript
  function Pessoa(){
      this.idade = 0
      setInterval(() =>{
          this.idade++
          console.log(this.idade)
      }, 1000)
  }
  new Pessoa
  ```

  

   [95-arrow-function.js](../../Aula./Modulo3/95-arrow-function.js) 

   [96-arrow-function.js](../../Aula./Modulo3/96-arrow-function.js) 

* This em uma função erram nao varia, sempre vai apontar o contesto onde foi criada.
  mesmo se forçar com bind nao altera.

​        [97-arrow-function.js](../../Aula./Modulo3/97-arrow-function.js) 

