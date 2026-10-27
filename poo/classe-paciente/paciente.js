export class Paciente {
    //Atributos

    nomeCompleto;
    peso;
    altura;
    sexo;

    //Metodos
    constructor(nomeCompleto, peso, altura, sexo){
        this.nomeCompleto = nomeCompleto;
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
    }
    calcularIMC(){
        return (this.peso / (this.altura * this.altura))
    }
}