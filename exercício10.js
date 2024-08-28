let TextoMenu = "Escolha qual operação deseja fazer: \n 1 soma \n 2 subtração \n 3 multiplicação \n 4 divisão \n 5 Potenciação \n 6 Radiciação"

let OpEscolhida = prompt(TextoMenu)
        let s1 = 0;
        let s2 = 0;
        let sub1 = 0;
        let sub2 = 0;
        let m1 = 0;
        let m2 = 0;
        let d1 = 0;
        let d2 = 0;
        let p1 = 0;
        let p2 = 0;
        let ra1 = 0;
        let ra2 = 0;
    

switch (OpEscolhida) {
    
    case "1":
         s1 = parseFloat(prompt("Primeiro número"))
         s2 = parseFloat(prompt("Segundo número"))
    
    alert(`${s1} + ${s2} = ${s1 + s2}`);
    break


    case "2":
        let sub1 = parseFloat(prompt("Primeiro número"))
        let sub2 = parseFloat(prompt("Segundo número"))
    
    alert(`${sub1} - ${sub2} = ${sub1 - sub2}`);
    break


    case "3":
        let m1 = parseFloat(prompt("Primeiro número"))
        let m2 = parseFloat(prompt("Segundo número"))
    rm1 = m1 * m2
    mensagem = "Resultado: " + rm1
    alert(`${m1} * ${m2} = ${m1 * m2}`);
    break


    case "4":
        let d1 = parseFloat(prompt("Primeiro número"))
        let d2 = parseFloat(prompt("Segundo número"))
    rd1 = d1 / d2
    mensagem = "Resultado: " + rd1
    break


    case "5":
        let p1 = parseFloat(prompt("Primeiro número"))
        let p2 = parseFloat(prompt("Segundo número"))
    rp1 = p1 ** p2
    mensagem = "Resultado: " + rp1
    break


    case "6":
        let ra1 = parseFloat(prompt("Primeiro número"))
        let ra2 = parseFloat(prompt("Segundo número"))
    rna1 = ra1 ** (1/ra2)
    mensagem = "Resultado: " + rna1
    break

    default:
        mensagem = ("Erro na operação.")
}


alert(mensagem)