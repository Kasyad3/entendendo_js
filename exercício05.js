let n1 = 0
let n2 = 0
let n3 = 0
n1 = parseFloat(prompt("informe um número"));
n2 = parseFloat(prompt("informe outro número"));
n3 = parseFloat(prompt("informe o ultimo número"));

if (n1 >= n2 && n1 >= n3 && n2 >= n3){mensagem = " O maior número é " + n1 + " , O menor número é " + n3}
else if (n1 >= n2 && n1 >= n3 && n3 >= n2){mensagem = " O maior número é " + n1 + " , O menor número é " + n2}

else if (n2 >= n1 && n2 >= n3 && n1 >= n3){mensagem = " O maior número é " + n2 + " , O menor número é " + n1}
else if (n2 >= n1 && n2 >= n3 && n3 >= n1){mensagem = " O maior número é " + n2 + " , O menor número é " + n3}

else if (n3 >= n1 && n3 >= n2 && n1 >= n2){mensagem = " O maior número é " + n3 + " , O menor número é " + n1}
else if (n3 >= n1 && n3 >= n2 && n2 >= n1) {mensagem = " O maior número é " + n3 + " , O menor número é " + n2}

alert(mensagem)