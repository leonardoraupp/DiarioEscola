//Nome: Leonardo Raupp Rodrigues

// Exercício 02: Palíndromo
// Diz-se de ou frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.
// Exemplos: Rodador, Civic, Ana, Radar, Renner, Otto.
// Criar uma rotina que verifica se a frase ou palavra é um palíndromo.

function checarPalindromo(texto) {
  const textoPadrao = texto.toLowerCase().replace(" ", ""); //  padronizo tudo em minúsculo e retiro os espaços
  const textoInvertido = textoPadrao.split("").reverse().join(""); //  uso separo, inverto e junto novamente as letras
  if (textoPadrao === textoInvertido) {                         //  comparo o texto original com o texto invertido    
    console.log("É um palíndromo");                         //saida para o usuário
  } else {
    console.log("Não é um palíndromo");
  }
}
checarPalindromo("Rodador");
checarPalindromo("Civic");
checarPalindromo("Ana");
checarPalindromo("Radar");
checarPalindromo("Renner");
checarPalindromo("Otto");
checarPalindromo("Luz azul");
checarPalindromo("Leo");
