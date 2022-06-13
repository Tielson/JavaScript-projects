let numberOne = prompt("Digite um numero:")
let numberTwo = prompt("Digite um numero:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo
 
alert('Soma: ' + sum)
alert('subtração: ' + sub)
alert('multiplicação: ' + multi)
alert('divisão: ' + div)
alert('resto: ' + restDiv)