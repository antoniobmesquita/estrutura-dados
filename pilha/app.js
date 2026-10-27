import { Pilha } from "./pilha.js";


/** 
* @param { Event } evento 
*/

function processarElemento(evento) {
    evento.preventDefault()
    const elemento = document.getElementById("idInElemento").value;

    try {
        const pilha = new Pilha()
    } catch (erro) {
        alert(erro.message)
    }
    resultadoVerificacaoPalindromo(elemento)
}

function dividirElemento(elemento) {
    const elementoDividido = elemento.replaceAll(" ", "").toLowerCase();
    return elementoDividido;
}

function empilharElementos(elemento) {
    const array = dividirElemento(elemento)
    const pilha = new Pilha();
    for (let i = 0; i < array.length; i++) {
        pilha.empilhar(array[i]);

    }
    return pilha;
}
function inverterElemento(elemento) {
    const elementoEmpilhado = empilharElementos(elemento);
    let elementoInvertido = new Pilha();
    while (!elementoEmpilhado.estaVazia()) {
        elementoInvertido.empilhar(elementoEmpilhado.acessar());
        elementoEmpilhado.desempilhar()
    }
    return elementoInvertido;
}
function verificarPalindromo(elemento) {
    const elementoEmpilhado = empilharElementos(elemento);
    const elementoInvertido = inverterElemento(elemento);
    while (!elementoEmpilhado.estaVazia()) {
        if (elementoEmpilhado.acessar() !== elementoInvertido.acessar()) {
            return false;
        }
        elementoEmpilhado.desempilhar();
        elementoInvertido.desempilhar();
    }
    return true
}

function resultadoVerificacaoPalindromo(elemento) {
    const containerVerificacao = document.getElementById("idOutResultadoVerificacao");
    const verficacao = verificarPalindromo(elemento);
    if (verficacao) {
        containerVerificacao.innerHTML = `<p> ${elemento} é um palindromo </p>`;
    } else {
        containerVerificacao.innerHTML = `<p> ${elemento} não é um palindromo </p>`;
    }
}

function inicializarAplicacao() {
    const formulario = document.getElementById("idFormularioElemento");
    formulario.addEventListener("submit", processarElemento);
}
document.addEventListener('DOMContentLoaded', inicializarAplicacao)