let num = 0
let mensagem = 0
let resultado = 0
let pergunta = 0

do {
    num = parseInt(prompt("Informe um número para ser gerado a tabuada."))
    mensagem = "";
    for (let t1 = 1; t1 <= 10; t1++) {

        //"\n é um caractere de quebra de linha"
        mensagem = mensagem + num + "x" + t1 + "=" + (resultado = num * t1) + "\n"

    }
    alert(mensagem)
    pergunta = prompt("deseja gerar outra tabuada? \n s \n n")
}
while (pergunta == "s")
