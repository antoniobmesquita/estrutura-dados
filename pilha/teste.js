import { Pilha } from "./pilha.js";

const frase = "socorram me subi no onibus em marrocos";
const palavra = "arara";
const numero = "72499427";


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

const frase2 = "momentum";



const fraseInvertida = inverterElemento("redrum")

//console.log(fraseInvertida.obterTamaho())

//console.log(pilhaNumero.obterTamaho())


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

function exibirResultadoVerificacaoPalindromo(elemento) {
    const verficacao = verificarPalindromo(elemento)
    if (verficacao) {
        return `${elemento} é um palindromo`
    } else {
        return `${elemento} não é um palindromo`
    }
}

const verificar = exibirResultadoVerificacaoPalindromo("Arara")
console.log(verificar)