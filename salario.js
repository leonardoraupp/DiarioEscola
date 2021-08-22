// Nome: Leonardo Raupp Rodrigues

// Exercício 03: Salário
// Uma empresa precisa calcular o salário de funcionários considerando que:
// ● A empresa paga R$ 12,00 por hora e R$ 40,00 adicionais por dependentes.
// ● Sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
// Faça um algoritmo que recebe o número de horas trabalhadas e o número de dependentes de um
// funcionário. Após, o algoritmo deve retornar o salário bruto e o salário líquido do funcionário.

function Salario(numeroHora, numeroDependetes) {
  const salarioBruto = numeroHora * 12 + numeroDependetes * 40; // fórmula do salario bruto
  console.log(`Salário bruto R$ ${salarioBruto}`); // saida no console
  const desconto = salarioBruto * 0.09;
  const salarioLiquido = salarioBruto - desconto; //fórmula do salario líquido
  console.log(`Salário líquido R$ ${salarioLiquido}`);
}

Salario(45, 3);
Salario(30, 2);
