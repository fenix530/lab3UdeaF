const interface =requiere('readline-sync');

var calculator=requiere('./app/calculadora');

const firstNumber=interface.question("Deme el primer numero:   ");
const secondNumber=interface.question("Deme el segundo numero:   ");

var a=perseInt(firstNumber);
var b=perseInt(secondNumber);

console.log(`Add ${a} + ${b} =${calculadora.sum(a,b)}`);
console.log(`Minus ${a} + ${b} =${calculadora.minus(a,b)}`);
console.log(`Multiply ${a} + ${b} =${calculadora.multiply(a,b)}`);
console.log(`Divide ${a} + ${b} =${calculadora.sum.divide(a,b)}`);