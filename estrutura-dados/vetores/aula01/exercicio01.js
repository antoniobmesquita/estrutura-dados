const prompt = require("prompt-sync")();

function lerNotas(qtdAlunos, array) {
for (let i = 0; i < qtdAlunos; i++) {
    array[i] = Number(prompt("Digite a nota: "))
}
}

function calcularMediaTurma(array) {
    let soma = 0
    let media = 0
    for (const valor of array) {
        soma += valor
    }
    media = soma / array.length
    return media
}

function encontrarMaiorNota(array){
    let maior = array[0]
    for (const valor of array) {
        if (valor > maior) {
            maior = valor
        }
    }
    return maior
}


function encontrarMenorNota(array){
    let menor = array[0]
    for (const valor of array) {
        if (valor < menor) {
            menor = valor
        }
    }
    return menor
}

function mostrarNotas(array, media) {
    for (const nota of array) {
        if (nota > media) {
            console.log(`Nota: ${nota}, acima da média: ${media}`)
        }else{
            console.log(`Nota: ${nota}, menor ou igual a média: ${media}`)
        }
    }
}

let tamanhoTurma = prompt("Insira o tamanho da turma: ");
const notas = [];


lerNotas(tamanhoTurma, notas);
console.log(notas)

const media =calcularMediaTurma(notas)
console.log(`Média da turma: ${media}`)

const maiorNota = encontrarMaiorNota(notas)
console.log(`A maior nota é: ${maiorNota}`)

const menorNota = encontrarMenorNota(notas)
console.log(`A menor nota é: ${menorNota}`)

mostrarNotas(notas, media)