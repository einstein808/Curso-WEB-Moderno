const valor = "global"
function minhaFuncao(){
    console.log(valor)
}
function exec(){
    const valor = "local"
    minhaFuncao()
}
exec()
// funcao carrega com si o local onde ela foi escrita.
// no caso acima ela acha Ǵlobal. ela nao ve onde foi executada, mais sim onde foi criada
