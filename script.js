// Solicita um número ao usuário
let numero = prompt("Digite um número:");

// Converte a entrada para número
numero = parseInt(numero);

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
  alert("O número é par.");
} else {
  alert("O número é ímpar.");
}
