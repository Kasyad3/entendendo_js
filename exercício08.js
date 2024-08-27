let n1 = prompt("Nome do produto1: ")
let p1 = parseFloat(prompt("Valor do produto1: "))
let n2 = (prompt("Nome do produto2: "))
let p2 = parseFloat(prompt("Valor do produto2: "))
let n3 = prompt("Nome do produto3: ")
let p3 = parseFloat(prompt("Valor do produto3: "));

if(p1>p2 && p1>p3){mensagem = n1 + " É o produto mais caro, custando: " + p1}
else if(p2>p1 && p2>p3){mensagem = n2 + " É o produto mais caro." + p2}
else if(p3>p1 && p3>p2){mensagem = n3 + " É o produto mais caro, custando: " + p3}
else
{mensagem = "Erro com o nome ou valor do produto!"}
alert(mensagem)