/*
Informe se o aluno está aprovado, de recuperação ou reprovado seguindo os seguintes critérios: 
Informar 3 notas
média > 6: aprovado
média < 4: reprovado
Obs: use o prompt e exiba o resultado em alert
*/

let nota1, nota2, nota3 = 0
let nome = 0

nome = prompt("Insira o nome do Aluno");

nota1 = parseFloat(prompt("Digite a nota 1: "));
nota2 = parseFloat(prompt("Digite a nota 2: "));
nota3 = parseFloat(prompt("Digite a nota 3: "));

let media = 0
let mensagem = 0

media = (nota1 + nota2 + nota3) / 3

if (media > 6) {
    mensagem = nome + "Você está Aprovado"
} else if (media < 4) {
    mensagem = nome + " Você está Reprovado"
} else if (media = 6, 5, 4) {
    mensagem = nome + "Você está em Recuperação"
}
alert(mensagem)