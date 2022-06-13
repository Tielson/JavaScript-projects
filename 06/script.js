let items = [];
let options


while (options != 3) {
  options = Number(prompt(`olá usuario! Digite o numero da opção desejada
  
  1.Cadastrar um item da lista
  2.Mostrar itens cadastrados
  3. Sair do programa
  `))

  switch (options) {
    case 1:
      let item = prompt(`Digite o nome do item`)
      items.push(item)
      break
    case 2:
      if (items.length == 0) {
        alert("Não existe itens cadastrados")
      }
      else {
        alert(items)
      }
      break
    case 3: alert("GoodBye!")
    break
  default:
  alert("Opção invalida. Tente novamente")
    }}