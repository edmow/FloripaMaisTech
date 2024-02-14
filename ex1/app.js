// Exercícios 1
function mensagemConsole() {
  console.log("Menssagem funcionando!");
}
mensagemConsole();

// Exercícios 2
let numero = window.prompt("Insira um número:");
console.log("O número inserido é:", numero);

// Exercícios 3
const nome = "Edmo ";
const sobrenome = "Junior";
const nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

// Exercícios 4

function somarNumeros(num1, num2) {
  const soma = num1 + num2;
  console.log("A soma de", num1, "e", num2, "é:", soma);
}

somarNumeros(2, 2);

// Exercícios 5
function verificarNumero(numero) {
  if (numero > 0) {
    console.log(numero + " é positivo.");
  } else if (numero < 0) {
    console.log(numero + " é negativo.");
  } else {
    console.log(numero + " é zero.");
  }
}

verificarNumero(5);

// Exercícios 6
const pessoas = [
    {
        nome: "Edmo",
        idade: 35,
        nacionalidade: "Brasileiro",
        profissao: "Engenheiro"
    },
    {
        nome: "Maria",
        idade: 25,
        nacionalidade: "Portuguesa",
        profissao: "Médica"
    },
    {
        nome: "Juan",
        idade: 45,
        nacionalidade: "Espanhol",
        profissao: "Advogado"
    }
];

for (const pessoa of pessoas) {
    console.log("Informações da Pessoa:");
    console.log("Nome:", pessoa.nome);
    console.log("Idade:", pessoa.idade);
    console.log("Nacionalidade:", pessoa.nacionalidade);
    console.log("Profissão:", pessoa.profissao);
    console.log("");
}

// Exercícios 7
function saudacao(hora) {
    if (hora >= 0 && hora < 12) {
        console.log("Bom dia!");
    } else if (hora >= 12 && hora < 18) {
        console.log("Boa tarde!");
    } else {
        console.log("Boa noite!");
    }
}

saudacao(8);

// Exercícios 8
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par.");
    } else {
        console.log(numero + " é ímpar.");
    }
}

parOuImpar(4);

// Exercícios 9
var diaDaSemana = new Date().getDay();

switch (diaDaSemana) {
  case 0:
    console.log("Hoje é Domingo.");
    break;
  case 1:
    console.log("Hoje é Segunda-feira.");
    break;
  case 2:
    console.log("Hoje é Terça-feira.");
    break;
  case 3:
    console.log("Hoje é Quarta-feira.");
    break;
  case 4:
    console.log("Hoje é Quinta-feira.");
    break;
  case 5:
    console.log("Hoje é Sexta-feira.");
    break;
  case 6:
    console.log("Hoje é Sábado.");
    break;
  default:
    console.log("Ops! Algo deu errado ao identificar o dia da semana.");
}

// Exercícios 10
function verificarMaioridade() {
  let idade = parseInt(prompt("Por favor, digite sua idade:"));

  if (isNaN(idade)) {
    console.log("Por favor, digite uma idade válida.");
    return;
  }

  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
}

verificarMaioridade();