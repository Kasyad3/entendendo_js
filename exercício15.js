let pao = 0

ValorPao = parseFloat(prompt("Informe o valor dos pães para gerar a tabela."));
let mensagem = ""
    for (let pao = 1; pao <= 50; pao++)
        {
        
            let CalDoPao = pao * ValorPao 
        
            mensagem = mensagem + pao + "=" + CalDoPao.toFixed(2) + "<br>"

    }
    document.write(mensagem)
        