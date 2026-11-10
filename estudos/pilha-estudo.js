// ESTUDO: PILHA (STACK) E VERIFICADOR DE PALÍNDROMO
// Baseado em: pilha/pilha.js, pilha/teste.js e pilha/app.js
// Como rodar: node pilha-estudo.js

// Pilha = LIFO (Last In, First Out): o último que entra é o primeiro que sai.

// ============================================================
// 1. CLASSE PILHA
// ============================================================
class Pilha {
    #array;
    #topo; // índice do último elemento. -1 = pilha vazia

    constructor() {
        this.#array = [];
        this.#topo = -1;
    }

    estaVazia() {
        return this.#topo === -1;
    }

    obterTamanho() {
        return this.#topo + 1;
    }

    empilhar(elemento) {
        this.#topo++;
        this.#array[this.#topo] = elemento;
    }

    // LÊ o topo, sem remover
    acessar() {
        if (this.estaVazia()) throw new Error("A pilha está vazia");
        return this.#array[this.#topo];
    }

    // Só DESCE o topo. O valor antigo continua no array,
    // mas fica inacessível e será sobrescrito no próximo empilhar.
    desempilhar() {
        if (this.estaVazia()) throw new Error("A pilha está vazia");
        this.#topo--;
    }

    limpar() {
        this.#topo = -1;
        this.#array = [];
    }
}

// ============================================================
// 2. TESTANDO OS MÉTODOS
// ============================================================
const pilha = new Pilha();
console.log("Vazia?", pilha.estaVazia());       // true

pilha.empilhar("a");
pilha.empilhar("r");
pilha.empilhar("a");
console.log("Tamanho:", pilha.obterTamanho());  // 3
console.log("Topo:", pilha.acessar());          // a

pilha.desempilhar();
console.log("Depois de desempilhar, topo:", pilha.acessar()); // r
console.log("Tamanho:", pilha.obterTamanho());  // 2

// Para "tirar" um valor: acessar() + desempilhar()
const valor = pilha.acessar();
pilha.desempilhar();
console.log("Valor retirado:", valor);          // r

pilha.limpar();
console.log("Vazia depois de limpar?", pilha.estaVazia()); // true

try {
    pilha.acessar();
} catch (erro) {
    console.log("Erro capturado:", erro.message);
}

// ============================================================
// 3. PALÍNDROMO USANDO PILHAS
// ============================================================

// Remove espaços e coloca em minúsculas
function dividirElemento(elemento) {
    return elemento.replaceAll(" ", "").toLowerCase();
}

// Empilha cada caractere (o último fica no topo)
function empilharElementos(elemento) {
    const texto = dividirElemento(elemento);
    const pilha = new Pilha();
    for (let i = 0; i < texto.length; i++) {
        pilha.empilhar(texto[i]);
    }
    return pilha;
}

// Passa tudo para outra pilha: a ordem fica invertida
function inverterElemento(elemento) {
    const elementoEmpilhado = empilharElementos(elemento);
    const elementoInvertido = new Pilha();
    while (!elementoEmpilhado.estaVazia()) {
        elementoInvertido.empilhar(elementoEmpilhado.acessar());
        elementoEmpilhado.desempilhar();
    }
    return elementoInvertido;
}

// Compara o topo das duas pilhas, desempilhando as duas
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
    return true;
}

function exibirResultadoVerificacaoPalindromo(elemento) {
    if (verificarPalindromo(elemento)) {
        return `${elemento} é um palindromo`;
    } else {
        return `${elemento} não é um palindromo`;
    }
}

// ============================================================
// 4. TESTES
// ============================================================
console.log("\n--- Palíndromos ---");
console.log(exibirResultadoVerificacaoPalindromo("arara"));
console.log(exibirResultadoVerificacaoPalindromo("Arara"));
console.log(exibirResultadoVerificacaoPalindromo("socorram me subi no onibus em marrocos"));
console.log(exibirResultadoVerificacaoPalindromo("72499427"));
console.log(exibirResultadoVerificacaoPalindromo("momentum"));

// Acompanhando a inversão de "abc":
// Pilha 1 (fundo -> topo): a b c
// Move c, depois b, depois a para a pilha 2
// Pilha 2 (fundo -> topo): c b a  (topo = a, o PRIMEIRO caractere)
// Na comparação: topo da pilha 1 (último caractere) x topo da pilha 2 (primeiro caractere)
