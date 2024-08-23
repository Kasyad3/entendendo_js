let numero = 0
 
numero = parseFloat(prompt("informe qual dia da semana: "))

if (numero == 1) {mensagem=("hoje é domingo")}
else if (numero == 2) {mensagem=("hoje é Segunda-feira")}
else if (numero == 3) {mensagem=("hoje é Terça-feira")}
else if (numero == 4) {mensagem=("hoje é Quarta-feira")}
else if (numero == 5) {mensagem=("hoje é Quinta-feira")}
else if (numero == 6) {mensagem=("hoje é Sexta-feira")}
else if (numero == 7) {mensagem=("hoje é Sábado")}
else
    {mensagem= "não existe"}
alert(mensagem)