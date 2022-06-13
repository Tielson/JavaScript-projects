let result = prompt("Advinhe o numero que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttenpts = 1


while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente: ")
  console.log(result, randomNumber)
  xAttenpts++
}


if (xAttenpts <= 1){
  alert(`Parabéns! Você advinhou na primeira tentativa`)
}
else{
  alert(`Parabéns! Você advinhou o numero em ${xAttenpts} tentativas`)
}

