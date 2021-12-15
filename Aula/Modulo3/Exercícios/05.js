function formatarDecimal (decimal){
return `R$ ${decimal.toFixed(3).toString().replace(".", ",")}`
}
console.log(formatarDecimal(0.2+0.1))