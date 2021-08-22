//Nome: Leonardo Raupp Rodrigues

// Exercício 01: Ordenação de Vetor com Inteiros
// Criar rotina que ordena de forma crescente um vetor com inteiros.
// ● De [9, 5, 1, 15, 3]
// ● Para [1, 3, 5, 9, 15]

vetores = [9, 5, 1, 15, 3];

vetores.sort(function comparar(a, b) {
  // metódo sort() para ordenar crescentemente, seguido de  uma função para comparar como números.
  return a - b;
});
console.log(vetores); // saída para o usuário
