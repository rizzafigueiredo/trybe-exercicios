/*1. Elabore alguns códigos e imprima o resultado no console usando console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com valores que serão operados. Escreva códigos para: */
let a = 16;
let b = 11;

console.log ('Soma: ' + (a + b));
console.log ('Subtração: ' + (a - b));
console.log ('Multiplicação: ' + (a * b));
console.log ('Divisão: ' + (a / b));
console.log ('Exponenciação: ' + (a ^ b));
console.log ('Módulo: ' + (a % b)); 

/*2. Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */
let a = 13;
let b = 25;
if (a > b) {
    console.log ('A variável de maior valor é A = ' + a);
} else {
    console.log ('A variável de maior valor é B = ' + b);
} 

/*3. Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. */
let a = 5;
let b = 7;
let c = 13;
if (a > b && a > c) {
    console.log ('A variável de maior valor é A = ' + a);
} else if (b > a && b > c) {
    console.log ('A variável de maior valor é B = ' + b);
} else if (c > a && c > b) {
    console.log ('A variável de maior valor é C = ' + c);
} 

/*4. Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo. */
let value = 7;
if (value > 0) {
  console.log ('Positive');
} else if (value < 0) {
    console.log ('Negative');
} else {
    console.log ('Zero');
} 

/*5. Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. */ 
let angle1 = 65;
let angle2 = 35;
let angle3 = 80;

let sum = angle1 + angle2 + angle3;

let positiveAngles = angle1 > 0 && angle2 > 0 && angle3 > 0;

if (positiveAngles) {
    if (sum === 180) {
        console.log (true);
    } else {
        console.log (false);
    };
} else {
    console.log ('Erro: ângulo inválido!')
} 

/*6. Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer. */
let xadrez = 'rei';
switch (xadrez) {
    case 'peao':
        console.log ('Anda uma casa por vez, para frente, para baixo, ou para os lados');
        break
    case 'torre':
        console.log ('Anda quantas casas quiser, para frente ou para os lados');
        break
    case 'bispo':
        console.log ('Anda quantas casas quiser, desde que seja na diagonal');
        break
    case 'cavalo':
        console.log ('Anda somente em L');
        break
    case 'rainha':
        console.log ('Anda para onde quiser, ela manda no bagulho');
        break
    case 'rei':
        console.log ('Esconde atrás de qualquer um, é um frouxo');
        break
default:
    console.log ('Peça inválida');
}; 

/* 7. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras: */
let grade = 95;
if (grade >= 90) {
    console.log ('A');
} else if (grade >= 80) {
    console.log ('B');
} else if (grade >= 70) {
    console.log ('C');
} else if (grade >= 60) {
    console.log ('D');
} else if (grade >= 50) {
    console.log ('E');
} else if (grade >= 40) {
    console.log ('F');
} else {
    console.log ('Valor inválido');
} 
