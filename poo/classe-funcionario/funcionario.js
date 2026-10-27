export class Funcionario {
    #matricula;
    #nome;
    #numeroDependentes;
    #salarioBase;
    #producao;
    constructor(matricula, nome, numeroDependentes, salarioBase, producao) {
        this.matricula = matricula;
        this.nome = nome;
        this.numeroDependentes = numeroDependentes;
        this.salarioBase = salarioBase;
        this.producao = producao
    }

    set matricula(matriculaAtualizada) {
        const numeroMatricula = Number(matriculaAtualizada);
        if (numeroMatricula > 0) {
            this.#matricula = numeroMatricula;
        } else {
            throw new Error("O número de matricula deve ser maior que 0");
        }

    }

    set nome(nomeAtualizado) {
        if (typeof nomeAtualizado === "string" && nomeAtualizado.trim().length > 0) {
            this.#nome = nomeAtualizado;
        } else {
            throw new Error("O nome do funcionário não pode ser vazio.");
        }

    }
    set numeroDependentes(numeroDependentesAtualizado) {
        const quantidadeDependentes = Number(numeroDependentesAtualizado);
        this.#numeroDependentes = quantidadeDependentes;
    }
    set salarioBase(salarioBaseAtualizado) {
        const valorSalarioBase = Number(salarioBaseAtualizado);
        if (valorSalarioBase > 0) {
            this.#salarioBase = valorSalarioBase;
        } else {
            throw new Error("O valor do salário deve ser maior que zero.");

        }

    }
    set producao(producaoAtualizada) {
        const quantidadeProducao = Number(producaoAtualizada)
        if (quantidadeProducao > 0) {
            this.#producao = quantidadeProducao;
        } else {
            throw new Error("O valor da produção deve ser maior que zero.");

        }

    }


    get matricula() {
        return this.#matricula
    }
    get nome() {
        return this.#nome
    }
    get numeroDependentes() {
        return this.#numeroDependentes
    }
    get salarioBase() {
        return this.#salarioBase
    }
    get producao() {
        return this.#producao
    }

    calcularValorGratificacao() {
        if (this.#producao <= 1000) return 500
        if (this.#producao <= 2000) return 1250
        return 2250
    }

    calcularSalarioBruto() {
        const valorGratificacao = this.calcularValorGratificacao()
        return this.#salarioBase + valorGratificacao
    }
    calcularDescontoINSS() {
        const salarioBruto = this.calcularSalarioBruto()
        if (salarioBruto <= 1412) return salarioBruto * 0.075;
        if (salarioBruto <= 2666.68) return salarioBruto * 0.09;
        if (salarioBruto <= 4000.03) return salarioBruto * 0.12;
        return salarioBruto * 0.14;

    };
    calcularDescontoIRPF() {
        const salarioBruto = this.calcularSalarioBruto()
        if (salarioBruto <= 2259.20) return 0;
        if (salarioBruto <= 2826.65) return salarioBruto * 0.075;
        if (salarioBruto <= 3751.05) return (salarioBruto * 0.15);
        if (salarioBruto <= 4664.68) return (salarioBruto * 0.225)
        return (salarioBruto * 0.275)
    };
    calcularValorFinalIRPF() {
        const valorIRPF = this.calcularDescontoIRPF()
        if (valorIRPF <= (this.#numeroDependentes * 123))
            return 0

        return valorIRPF - (this.#numeroDependentes * 123)
    }

    calcularSalarioLiquido() {
        const salarioBruto = this.calcularSalarioBruto()
        const descontoINSS = this.calcularDescontoINSS()
        const descontoIRPF = this.calcularValorFinalIRPF()
        const salarioLiquido = salarioBruto - descontoINSS - descontoIRPF;
        return salarioLiquido
    };
}