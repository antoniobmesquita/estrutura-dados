import { Pilha } from "./pilha.js";

let vetor = []



function gerarVetor(conjunto, tamanho) {
    vetor.length = 0;
    for (let i = 0; i < tamanho; i++) {
        conjunto[i] = parseInt(Math.random() * 101);
    }
}

function empilharElementos(vetor) {
    const pilha = new Pilha();
    for (let i = 0; i < vetor.length; i++) {
        pilha.empilhar(vetor[i]);
    }
    return pilha;
}

function inverterVetor(conjunto) {
    let vetorInvertido = [];
    const vetorEmpilhado = empilharElementos(conjunto);
    for (let i = 0; i < conjunto.length; i++) {
        vetorInvertido[i] = vetorEmpilhado.acessar();
        vetorEmpilhado.desempilhar();
    }
    return vetorInvertido
}

function exibirVetor() {
    const tamanho = Number(document.getElementById("idInTamanho").value);
    gerarVetor(vetor, tamanho);
    const vetorInvertido = inverterVetor(vetor);
    document.getElementById("idOutVetor").innerHTML = `
    <p>[ ${vetor.join(" | ")} ]</p>
    <p>[ ${vetorInvertido.join(" | ")} ]</p>`
}
addEventListener("click", exibirVetor)