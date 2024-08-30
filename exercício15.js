num = parseInt(prompt("Informe um número para ser gerado a tabuada."));

    for (let t1 = 1; t1 <= 10; t1++) {

        //"\n é um caractere de quebra de linha"
        mensagem = mensagem + num + "x" + t1 + "=" + (resultado = num * t1) + "\n";}