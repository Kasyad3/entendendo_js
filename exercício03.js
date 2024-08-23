let numero = 0
let numero1 = 0
numero = parseFloat(prompt("informe um número"))
numero1 = parseFloat(prompt("informe outro número"))

if (numero>numero1){mensagem = numero + " é maior que " + numero1}
else if (numero<numero1){mensagem = numero1 + " é maior que " + numero}


alert(mensagem)