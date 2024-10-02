// Solicita um número ao usuário
let numero = prompt("Digite um número:");

// Converte a entrada para número
numero = parseFloat(numero);

// Verifica se o número é positivo, negativo ou zero
if (numero > 0) {
  alert("O número é positivo.");
} else if (numero < 0) {
  alert("O número é negativo.");
} else {
  alert("O número é zero.");
}
