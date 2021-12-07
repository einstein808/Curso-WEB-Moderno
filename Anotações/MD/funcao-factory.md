#  Funcao Factory

para nao ter que ficar criando vários objetos de uma vez, voce criar uma funcao para criar vários objetos.

```javascript
const prod1 ={
    nome: '...',
    preco: 45,
}
const prod2 ={
    nome: '...',
    preco: 4325,
}
// repete muito código.
```

ai voce cria uma funçao para criar os obejtos.

```javascript
function criarPessoa (){
return {
nome:"ana",
sobrenome: "silva"
}}
```

Pode se criar com classe ou function.

vantagem é que no browser a funcao construtora sempre vai saber onde foi criada. Caso do this.

