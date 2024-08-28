let TextoMenu = "Informe o número"
let n = parseFloat(prompt(TextoMenu))
let dezena_sep = (n % 100)
let centena = (n - dezena_sep) / 100
let unidades = (dezena_sep % 10)
let dezena = (dezena_sep - unidades) / 10

let centena_plural 
if (centena ==1) centena_plural = "Centena"
else centena_plural = "centenas"

let dezena_plural 
if (dezena ==1) dezena_plural = "dezena"
else dezena_plural = "dezenas"

let unidade_plural 
if (unidades ==1) unidade_plural = "unidade"
else unidade_plural = "unidades"

if (n >=1000 || n<1) mensagem = "Número inválido, Digite número entre 1 e 999."
else mensagem = `${n}: ${centena} ${centena_plural}, ${dezena} ${dezena_plural} e ${unidades} ${unidade_plural}.`
alert(mensagem)
