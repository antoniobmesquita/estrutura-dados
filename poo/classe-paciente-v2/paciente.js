export class Paciente {
    //Atributos

    #nomeCompleto;
    #peso;
    #altura;
    #sexo;

    /**
   * Construtor da classe Paciente.
   * Delega a atribuição dos valores aos métodos "set" 
   * para reaproveitar as validações.
   * 
   * @param {string} nome - Nome completo do paciente.
   * @param {number} peso - Peso em quilogramas (kg).
   * @param {number} altura - Altura em metros (m).
   * @param {string} sexo - Sexo biológico ('M' ou 'F').
   */

    //Metodos
    constructor(nomeCompleto, peso, altura, sexo) {
        this.nomeCompleto = nomeCompleto;
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
    }
    // Sets

    get nomeCompleto() {

        return this.#nomeCompleto;
    }
    get peso() {
        return this.#peso;
    }
    get altura() {
        return this.#altura;
    }
    get sexo() {
        return this.#sexo === 'M' ? 'Masculino' : 'Feminino';
    }
    // Sets
    set nomeCompleto(nomeCompletoAtualizado) {
        if (typeof nomeCompletoAtualizado === "string" && nomeCompletoAtualizado.trim().length > 0) {
            this.#nomeCompleto = nomeCompletoAtualizado.trim();
        }
        else {
            throw new Error("O nome não pode ser vazio");

        }
    }
    set peso(pesoAtualizado) {
        const pesoConvertido = Number(pesoAtualizado)
        if (pesoConvertido > 0) {
            this.#peso = pesoConvertido;
        } else {
            throw new Error("O peso deve ser maior que 0");
        }
    }
    set altura(alturaAtualizada) {
        const alturaConvertida = Number(alturaAtualizada)
        if (alturaConvertida > 0) {
            this.#altura = alturaConvertida;
        }
        else {
            throw new Error("A altura deve szer maior que 0");

        }
    }

    set sexo(sexoAtualizado) {
        const sexoFormatado = sexoAtualizado.trim().toUpperCase();
        if (sexoFormatado === 'M' || sexoFormatado === 'F') {
            this.#sexo = sexoFormatado;
        } else {
            throw new Error("O sexo informado é inválido. Utiize 'M' ou 'F'");

        }

    }

    calcularIMC() {
        return (this.#peso / (this.#altura * this.#altura))
    }

    calcularFaixaDeRisco() {
        let imc = this.calcularIMC()

        if (imc < 20) {
            return "Abaixo do peso ideal"
        } else if (imc >= 20 && imc <= 25) {
            return "Peso normal"
        } else if (imc > 25 && imc <= 30) {
            return "Excesso de peso"
        }
        else if (imc > 30 && imc <= 35) {
            return "Obesidade"
        } else {
            return "Obesidade mórbida"
        }
    }
    calcularPesoIdeal() {

        if (this.#sexo === "M") {
            return (72.7 * this.#altura) - 58;
        } else if (this.#sexo === "F") {
            return (62.1 * this.#altura) - 44.7;
        }
    }
}