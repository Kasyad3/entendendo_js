let n1 = 0
let n2 = 0
let n3 = 0
n1 = parseFloat(prompt("informe um número"));
n2 = parseFloat(prompt("informe outro número"));
n3 = parseFloat(prompt("informe o ultimo número"));

if (n1 > n2 && n1 > n3) { mensagem = (n1 + " É maior que " + n2 + " e " + n3); }

else if (n2 > n1 && n2 > n3) { mensagem = (n2 + " É maior que " + n1 + " e " + n3); }

else if (n3 > n1 && n3 > n2) { mensagem = (n3 + " É maior que " + n1 + " e " + n2); }

else { mensagem = ("Todos tem o mesmo valor") }

alert(mensagem)