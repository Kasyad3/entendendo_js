let Nome = (prompt("Digite seu nome: "));
let GanhoPorHora = parseFloat(prompt("Quanto ganha por hora? "));
let HorasTrabalhadasMes = parseFloat(prompt("Quantas horas trabalha por mês? "));

let TotalRenda = GanhoPorHora * HorasTrabalhadasMes

let mensagem = (Nome + " Recebe " + TotalRenda + " De renda total ao mês trabalhado. ");

alert(mensagem)