let TextoMenu = `Informe o horário que estuda digitando: \n m = matutino \n v = vespertino \n n = noturno`;

let turno = (prompt(TextoMenu));

switch (turno) {

    case "m":
    mensagem = "Bom Dia!!";
    break;

    case "v":
        mensagem = "Boa Tarde!!";
    break;

    case "n":
        mensagem = "Boa Noite!!";
        break;
    
    default:
        mensagem = "Dia Inválido.";
        break;
}

alert(mensagem)