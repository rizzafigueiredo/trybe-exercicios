/*8. Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. */
let num1 = 6;
let num2 = 11;
let num3 = 5;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log (true);
} else {
    console.log (false);
} 

/*9. Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false. */
let num1 = 6;
let num2 = 11;
let num3 = 5;
if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log (true);
} else {
    console.log (false);
} 

/*10. Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos. */
let cost = 100;
let price = 140;

if (cost >= 0 && price >= 0) {
    let totalCost = cost * 1.3;
    let profit = (price - totalCost) * 1000;
    console.log (profit)
} else {
    console.log ('Erro! Dados inválidos.')
} 

/*11. Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido. */

let rawSalary = 8970.20;
let baseSalary;
let incomeTax;
let liquidSalary;

if (rawSalary <= 1556.94) {
    baseSalary = (rawSalary * 0.92);
} else if (rawSalary <= 2594.92) {
    baseSalary = (rawSalary * 0.91);
} else if (rawSalary <= 5189.82) {
    baseSalary = (rawSalary * 0.89);
} else {
    baseSalary = (rawSalary - 570.88);
};

console.log (baseSalary);

if (baseSalary <= 1903.98) {
    incomeTax = 0;
} else if (baseSalary <= 2826.65) {
    incomeTax = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
    incomeTax = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
    incomeTax = (baseSalary * 0.225) - 636.13;
} else {
    incomeTax = (baseSalary * 0.275) - 839.36;
};

console.log (incomeTax);

console.log (liquidSalary = baseSalary - incomeTax);
