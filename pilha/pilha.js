export class Pilha{
    //atributos privados
    #array;
    #topo;

    //metodo construtor
    constructor(){
        this.#array = [];
        this.#topo = -1;
    }

    estaVazia(){
        return(this.#topo === -1)
    }
    obterTamaho(){
        return this.#topo + 1;
    }
    empilhar(elemento){
        this.#topo++
        this.#array[this.#topo] = elemento;
        /*Mesma coisa que: 
        this.#array[ ++this.#topo] = elemento;
        */
    }
    acessar(){
        if (this.estaVazia()) throw new Error("A pilha está vazia");
        return this.#array[this.#topo];
    }
    desempilhar(){
        if(this.estaVazia()) throw new Error("A pilha estrá vazia");
        this.#topo--
    }
    limpar(){
        this.#topo = -1;
        this.#array = [];
    }
}