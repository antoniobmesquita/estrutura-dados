/**
 * Classe responsável por representar a entidade 
 * Paciente e suas regras de negócio.
 * Utiliza campos privados (#) e Accessor Properties (get/set) 
 * nativos do JavaScript.
 * A palavra-chave export serve para tornar a classe Paciente 
 * pública e acessível para outros arquivos JavaScript 
 * dentro do ecossistema de módulos (ES Modules).
 */
export class Paciente {
  // Declaração dos campos privados
  #nome;
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
  constructor(nome, peso, altura, sexo) {
    // Estas atribuições disparam os métodos 'set' correspondentes, 
    // garantindo a validação
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.sexo = sexo;
  }

  // ==========================================
  // MÉTODOS SETTERS (Mutadores com Validação)
  // ==========================================

  set nome(novoNome) {
    /*
      if (typeof novoNome === "string" && novoNome.trim().length > 0): realiza uma validação 
      rigorosa da entrada:
      novoNome: verifica se a variável não é nula (null), 
      indefinida (undefined) ou uma cadeia de caracteres vazia ("").
      novoNome.trim(): remove os espaços em branco no início 
      e no final do texto.
      .length > 0: assegura que, após remover os espaços excedentes, 
      a cadeia ainda contém pelo menos um caractere legível, 
      impedindo que nomes constituídos unicamente por espaços 
      passem na validação.
    */
    if (typeof novoNome === "string" && novoNome.trim().length > 0) {
      this.#nome = novoNome.trim();
    } else {
      throw new Error("O nome do paciente não pode ser vazio.");
    }
  }

  set peso(novoPeso) {
    const pesoConvertido = Number(novoPeso);
    if (pesoConvertido > 0) {
      this.#peso = pesoConvertido;
    } else {
      throw new Error("O peso deve ser um valor numérico maior que zero.");
    }
  }

  set altura(novaAltura) {
    const alturaConvertida = Number(novaAltura);
    if (alturaConvertida > 0) {
      this.#altura = alturaConvertida;
    } else {
      throw new Error("A altura deve ser um valor numérico maior que zero.");
    }
  }

  set sexo(novoSexo) {
    const sexoFormatado = novoSexo.trim().toUpperCase();
    if (sexoFormatado === 'M' || sexoFormatado === 'F') {
      this.#sexo = sexoFormatado;
    } else {
      throw new Error("O sexo informado é inválido. Utilize 'M' ou 'F'.");
    }
  }

  // ==========================================
  // MÉTODOS GETTERS (Acessadores)
  // ==========================================

  get nome() {
    return this.#nome;
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

  // ==========================================
  // MÉTODOS DE REGRAS DE NEGÓCIO
  // ==========================================

  /**
   * Calcula o Índice de Massa Corporal (IMC).
   * @returns {number} Valor do IMC calculado.
   */
  calcularIMC() {
    return this.#peso / (this.#altura * this.#altura);
  }

  /**
   * Determina a faixa de risco de acordo com o IMC calculado.
   * @returns {string} Descrição textual da faixa de risco.
   */
  classificarFaixaRisco() {
    const imc = this.calcularIMC();

    if (imc < 20)   return 'abaixo do peso ideal';
    if (imc <= 25)  return 'peso normal';
    if (imc <= 30)  return 'excesso de peso';
    if (imc <= 35)  return 'obesidade';
    return 'obesidade mórbida';
  }

  /**
   * Calcula o peso ideal com base no sexo do paciente.
   * @returns {number} Peso ideal estimado em kg.
   */
  calcularPesoIdeal() {
    if (this.#sexo === 'M') return (72.7 * this.#altura) - 58;
    return (62.1 * this.#altura) - 44.7;
  }
}