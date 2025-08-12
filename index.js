let userName = getFirstName("Emanuel-vieira", "-");
console.log("Seja bem-vindo " + userName);

userName = getFirstName("David vieira", " ");
console.log("Seja bem-vindo " + userName);
function getFirstName(name, teste){
  let firstName = name.split(teste)[1]
  return firstName;
}

function getLastName(name, splitChar){
  let parte = name.split(splitChar);
  let lastName = parte[parte.length - 1];
  return lastName;
}
let userLastName = getLastName("Emanuel-vieira-tulio", "-");
console.log("ultimo nome: " + userLastName)