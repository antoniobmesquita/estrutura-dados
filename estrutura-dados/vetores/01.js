const prompt = require("prompt-sync")()

function notas() {
    somaNotas = 0
    media = 0
    maiorNota = 0
    menorNota = 99999999999999999999999999999999999999999
    nomeMenorNota = ""
    nomeMaiorNota = ""
    for (let i = 1; i <= 3; i++) {
        nome = prompt("Digite seu nome: ");
        nota = Number(prompt("Digite sua nota: "))
        if (nota > maiorNota) {
            maiorNota = nota
            nomeMaiorNota = nome
        }
        if (nota < menorNota) {
            menorNota = nota
            nomeMenorNota = nome
        }
        somaNotas += nota
    }
    media = somaNotas / 3
    console.log(`A média foi de ${media}`)
    console.log(`A maior nota foi ${maiorNota}, do(a) aluno(a): ${nomeMaiorNota}`)
    console.log(`A menor nota foi ${menorNota}, do(a) aluno(a): ${nomeMenorNota}`)

    for (let i = 1; i <= 3; i++) {
        nome = prompt("Digite seu nome: ");
        nota = Number(prompt("Digite sua nota: "))
        if (nota > media) {
            console.log(`${nome} sua nota foi ${nota} e ficou acima da média`)
        }
        if (nota < media) {
            console.log(`${nome} sua nota foi ${nota} e ficou abaixo da média`)
        }
    }
}

notas()