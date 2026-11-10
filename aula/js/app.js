import { Pilha } from "./pilha.js";
const numero = document.getElementById("idInNumero");
const btnExecutar = document.getElementById("btnExecutar");
const resultado = document.getElementById("idOutResultado");

function verificarCapicua(numero){
    const pilha = new Pilha();
    let numeroMultiplicacao = 1;
    let numeroInvertido = 0;
    let numeroApoio = numero;
    while (numeroApoio > 0) {
        let resto = numeroApoio % 10;
        pilha.empilhar(resto);
        numeroApoio = parseInt(numeroApoio / 10);
    }
    while(!pilha.estaVazia()){
        numeroInvertido += pilha.acessar() * numeroMultiplicacao; 
        pilha.desempilhar();
        numeroMultiplicacao *= 10;
    }
    if (numeroInvertido == numero) return true;
    console.log(numeroInvertido)
    
}

function executarBotao(){
    const valor = Number(numero.value);
    let saida = "O Número " + valor;
    if(verificarCapicua(valor)) saida += " É um número Capicua";
    else saida += " Não é um número Capicua"
    resultado.innerText = saida;
}

btnExecutar.addEventListener("click", executarBotao)