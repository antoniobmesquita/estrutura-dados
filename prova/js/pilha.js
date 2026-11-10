export class Pilha{
    //Atributos privados da classe pilha
    #array; // vetor para armazenamento dos dados da pilha
    #topo; // índice do elemento do topo (-1 == pilha vazia)
    //Construtor
    constructor(){
        this.#array = [];
        this.#topo = -1;
    }
    //verificar se a pilha esta vazia
    estaVazia(){
        return (this.#topo === -1);
    }
    //Quantidade de elementos da pilha
    obterTamanho(){
        return this.#topo+1;
    }
    //Incluir elemento no topo da pilha
    empilhar(elemento){
        //this.#topo++;
        //this.#array[this.#topo] = elemento;
        this.#array[++this.#topo] = elemento;
    }
    //acessar um elemento do topo da pilha, sem removê-lo
    acessar(){
        if (this.estaVazia()) {
            throw new Error("Pilha vazia: não há elemento no topo.");
        }
        return this.#array[this.#topo];
    }
    // Remove  o elemento do topo
    desempilhar() {
        if (this.estaVazia()) {
            throw new Error("Pilha vazia: nada para desempilhar.");
        }   
        this.#topo--;
    }
    // Esvazia a pilha
    limpar() {
        this.#array = [];
        this.#topo = -1;
    }
}