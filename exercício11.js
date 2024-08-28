let TextoMenu = "Converter: \n a - Celcius em Fahrenheit \n b - Fahrenheit em Celcius"

let c1 = 0
let f1 = 0
let celcius = 0
let fah = 0

let conversão = prompt(TextoMenu)

switch (conversão) {
    case "a":
        celcius = parseFloat(prompt("Informe a temperatura em Celcius: "))
        convcelsius = ((celcius * 9 / 5) + 32)
        mensagem = ("O valor Convertido para Fahrenheit: " + convcelsius)
        break;

    case "b":
        fah = parseFloat(prompt("Informe a temperatura em Fahrenheit: "))
        convfah = ((fah -32) * 5 / 9)
        mensagem = ("O valor Convertido para Celcius: " + convfah)
        break;
        
    default: 
    mensagem = ("Error")
    break;

}
alert(mensagem)