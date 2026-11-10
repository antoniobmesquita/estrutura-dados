// ESTUDO: CLASSES EM JAVASCRIPT
// Baseado em: classe-paciente-v2/paciente.js e classe-funcionario/funcionario.js
// Como rodar: node classes-estudo.js

// ============================================================
// 1. CLASSE PACIENTE (com encapsulamento)
// ============================================================
// "#" = atributo privado (só acessível dentro da classe)
// get = ler o valor | set = alterar com validação
class Paciente {
    #nomeCompleto;
    #peso;
    #altura;
    #sexo;

    constructor(nomeCompleto, peso, altura, sexo) {
        // Atenção: "this.peso = peso" NÃO grava direto.
        // Chama o SETTER, reaproveitando a validação.
        this.nomeCompleto = nomeCompleto;
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
    }

    // ---------- GETTERS ----------
    get nomeCompleto() { return this.#nomeCompleto; }
    get peso() { return this.#peso; }
    get altura() { return this.#altura; }
    get sexo() { return this.#sexo === 'M' ? 'Masculino' : 'Feminino'; }

    // ---------- SETTERS (com validação) ----------
    set nomeCompleto(nomeAtualizado) {
        if (typeof nomeAtualizado === "string" && nomeAtualizado.trim().length > 0) {
            this.#nomeCompleto = nomeAtualizado.trim();
        } else {
            throw new Error("O nome não pode ser vazio");
        }
    }

    set peso(pesoAtualizado) {
        const pesoConvertido = Number(pesoAtualizado);
        if (pesoConvertido > 0) {
            this.#peso = pesoConvertido;
        } else {
            throw new Error("O peso deve ser maior que 0");
        }
    }

    set altura(alturaAtualizada) {
        const alturaConvertida = Number(alturaAtualizada);
        if (alturaConvertida > 0) {
            this.#altura = alturaConvertida;
        } else {
            throw new Error("A altura deve ser maior que 0");
        }
    }

    set sexo(sexoAtualizado) {
        const sexoFormatado = sexoAtualizado.trim().toUpperCase();
        if (sexoFormatado === 'M' || sexoFormatado === 'F') {
            this.#sexo = sexoFormatado;
        } else {
            throw new Error("O sexo informado é inválido. Utilize 'M' ou 'F'");
        }
    }

    // ---------- MÉTODOS DE NEGÓCIO ----------
    calcularIMC() {
        return this.#peso / (this.#altura * this.#altura);
    }

    calcularFaixaDeRisco() {
        const imc = this.calcularIMC();
        if (imc < 20) return "Abaixo do peso ideal";
        if (imc <= 25) return "Peso normal";
        if (imc <= 30) return "Excesso de peso";
        if (imc <= 35) return "Obesidade";
        return "Obesidade mórbida";
    }

    calcularPesoIdeal() {
        if (this.#sexo === "M") return (72.7 * this.#altura) - 58;
        if (this.#sexo === "F") return (62.1 * this.#altura) - 44.7;
    }
}

// ---------- USANDO A CLASSE ----------
const p1 = new Paciente("Godofredo", 100, 1.90, "M");
console.log("Nome:", p1.nomeCompleto);
console.log("Sexo:", p1.sexo);
console.log("IMC:", p1.calcularIMC());
console.log("Faixa:", p1.calcularFaixaDeRisco());
console.log("Peso ideal:", p1.calcularPesoIdeal());

// Alterar via setter (passa pela validação)
p1.peso = 70;
console.log("Novo IMC:", p1.calcularIMC());

// Setter lança erro se o valor for inválido. try/catch captura.
try {
    p1.peso = -5;
} catch (erro) {
    console.log("Erro capturado:", erro.message);
}

try {
    new Paciente("", 70, 1.80, "F");
} catch (erro) {
    console.log("Erro capturado:", erro.message);
}

// p1.#peso = 10;  // ERRO de sintaxe: atributo privado não é acessível de fora

// ============================================================
// 2. CLASSE FUNCIONARIO
// ============================================================
class Funcionario {
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
        this.producao = producao;
    }

    set matricula(valor) {
        const numero = Number(valor);
        if (numero > 0) this.#matricula = numero;
        else throw new Error("O número de matricula deve ser maior que 0");
    }
    set nome(valor) {
        if (typeof valor === "string" && valor.trim().length > 0) this.#nome = valor;
        else throw new Error("O nome do funcionário não pode ser vazio.");
    }
    set numeroDependentes(valor) {
        this.#numeroDependentes = Number(valor); // sem validação
    }
    set salarioBase(valor) {
        const numero = Number(valor);
        if (numero > 0) this.#salarioBase = numero;
        else throw new Error("O valor do salário deve ser maior que zero.");
    }
    set producao(valor) {
        const numero = Number(valor);
        if (numero > 0) this.#producao = numero;
        else throw new Error("O valor da produção deve ser maior que zero.");
    }

    get matricula() { return this.#matricula; }
    get nome() { return this.#nome; }
    get numeroDependentes() { return this.#numeroDependentes; }
    get salarioBase() { return this.#salarioBase; }
    get producao() { return this.#producao; }

    // Faixas: cada "if" com return só é avaliado se o anterior falhou
    calcularValorGratificacao() {
        if (this.#producao <= 1000) return 500;
        if (this.#producao <= 2000) return 1250;
        return 2250;
    }

    calcularSalarioBruto() {
        return this.#salarioBase + this.calcularValorGratificacao();
    }

    calcularDescontoINSS() {
        const bruto = this.calcularSalarioBruto();
        if (bruto <= 1412) return bruto * 0.075;
        if (bruto <= 2666.68) return bruto * 0.09;
        if (bruto <= 4000.03) return bruto * 0.12;
        return bruto * 0.14;
    }

    calcularDescontoIRPF() {
        const bruto = this.calcularSalarioBruto();
        if (bruto <= 2259.20) return 0;
        if (bruto <= 2826.65) return bruto * 0.075;
        if (bruto <= 3751.05) return bruto * 0.15;
        if (bruto <= 4664.68) return bruto * 0.225;
        return bruto * 0.275;
    }

    // IRPF depois de abater 123 por dependente (nunca fica negativo)
    calcularValorFinalIRPF() {
        const irpf = this.calcularDescontoIRPF();
        const deducao = this.#numeroDependentes * 123;
        if (irpf <= deducao) return 0;
        return irpf - deducao;
    }

    calcularSalarioLiquido() {
        return this.calcularSalarioBruto()
            - this.calcularDescontoINSS()
            - this.calcularValorFinalIRPF();
    }
}

// ---------- USANDO A CLASSE ----------
const f1 = new Funcionario(1, "Maria", 2, 3000, 1500);
console.log("\nFuncionário:", f1.nome);
console.log("Gratificação:", f1.calcularValorGratificacao().toFixed(2));
console.log("Salário bruto:", f1.calcularSalarioBruto().toFixed(2));
console.log("INSS:", f1.calcularDescontoINSS().toFixed(2));
console.log("IRPF:", f1.calcularDescontoIRPF().toFixed(2));
console.log("IRPF final:", f1.calcularValorFinalIRPF().toFixed(2));
console.log("Salário líquido:", f1.calcularSalarioLiquido().toFixed(2));

try {
    new Funcionario(0, "Joao", 1, 2000, 800);
} catch (erro) {
    console.log("Erro capturado:", erro.message);
}
