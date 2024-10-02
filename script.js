// Solicita um número ao usuário
let numero = prompt("Digite um número para ver a tabuada:");

// Converte a entrada para número
numero = parseInt(numero);

// Exibe a tabuada do número
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}
