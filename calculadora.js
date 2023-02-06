// Para execultar o codigo, basta digitar node calculadora.js var1 var2

const args = process.argv.slice(2);
console.log(parseInt(args[0]) + parseInt(args[1]));