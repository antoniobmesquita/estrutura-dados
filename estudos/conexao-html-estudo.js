// ESTUDO: CONEXÃO ENTRE JAVASCRIPT E HTML
// Baseado em: pilha/app.js, pilha/index.html, classe-paciente-v2/app.js,
// classe-funcionario/app.js e projeto-v1/js/engine.js
//
// ATENÇÃO: este arquivo roda no NAVEGADOR (usa "document"), não no Node.
// Use como app.js, na mesma pasta de pilha.js e do index.html abaixo.
//
// ------------------------------------------------------------
// index.html (resumo do seu projeto da pilha):
//
// <form id="idFormularioElemento">
//     <input type="text" id="idInElemento" minlength="3" required>
//     <button type="submit" id="botaoEnviar">Verificar</button>
//     <button type="reset" id="botaoLimpar">Limpar</button>
// </form>
// <section id="idOutResultadoVerificacao" aria-live="polite"></section>
// <script type="module" src="./app.js"></script>
// ------------------------------------------------------------
//
// type="module" é obrigatório para usar import/export.
// Os "id" do HTML precisam ser IDÊNTICOS aos usados em getElementById.

import { Pilha } from "./pilha.js";

// ============================================================
// 1. FUNÇÃO QUE TRATA O ENVIO DO FORMULÁRIO
// ============================================================

/**
 * @param { Event } evento
 */
function processarElemento(evento) {
    // Impede o comportamento padrão do submit
    // (enviar o formulário e recarregar a página)
    evento.preventDefault();

    // .value sempre devolve STRING
    const elemento = document.getElementById("idInElemento").value;

    // try/catch: captura erros lançados com "throw new Error(...)"
    try {
        resultadoVerificacaoPalindromo(elemento);
    } catch (erro) {
        alert(erro.message); // erro.message = texto passado no Error
    }
}

// ============================================================
// 2. LÓGICA DA PILHA (a mesma do pilha-estudo.js)
// ============================================================
function dividirElemento(elemento) {
    return elemento.replaceAll(" ", "").toLowerCase();
}

function empilharElementos(elemento) {
    const texto = dividirElemento(elemento);
    const pilha = new Pilha();
    for (let i = 0; i < texto.length; i++) {
        pilha.empilhar(texto[i]);
    }
    return pilha;
}

function inverterElemento(elemento) {
    const elementoEmpilhado = empilharElementos(elemento);
    const elementoInvertido = new Pilha();
    while (!elementoEmpilhado.estaVazia()) {
        elementoInvertido.empilhar(elementoEmpilhado.acessar());
        elementoEmpilhado.desempilhar();
    }
    return elementoInvertido;
}

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

// ============================================================
// 3. ESCREVENDO O RESULTADO NA PÁGINA
// ============================================================
function resultadoVerificacaoPalindromo(elemento) {
    // Pega a seção de saída pelo id
    const containerVerificacao = document.getElementById("idOutResultadoVerificacao");
    const verificacao = verificarPalindromo(elemento);

    // innerHTML substitui o conteúdo do elemento
    // Crase + ${ } = template literal (mistura texto e variáveis)
    if (verificacao) {
        containerVerificacao.innerHTML = `<p> ${elemento} é um palindromo </p>`;
    } else {
        containerVerificacao.innerHTML = `<p> ${elemento} não é um palindromo </p>`;
    }
}

// ============================================================
// 4. LIGANDO O EVENTO AO FORMULÁRIO
// ============================================================
function inicializarAplicacao() {
    const formulario = document.getElementById("idFormularioElemento");

    // Segundo argumento: a função SEM parênteses (referência).
    // Com () ela seria executada na hora, em vez de esperar o submit.
    formulario.addEventListener("submit", processarElemento);
}

// DOMContentLoaded: espera o HTML carregar antes de procurar os elementos
document.addEventListener("DOMContentLoaded", inicializarAplicacao);

// ============================================================
// 5. PADRÃO IGUAL NOS OUTROS PROJETOS (resumo)
// ============================================================
// Paciente v2:
//   const nome   = document.getElementById("idInNome").value;
//   const peso   = parseFloat(document.getElementById("idInPeso").value);
//   const altura = parseFloat(document.getElementById("idInAltura").value);
//   const sexo   = document.getElementById("idInSexo").value;
//   try {
//       const paciente = new Paciente(nome, peso, altura, sexo);
//       exibirResultado(paciente);   // escreve em #idOutAreaResultado
//   } catch (erro) { alert(erro.message); }
//
// Funcionário:
//   lê idInNumeroMatricula, idInNome, idInNumeroDependentes,
//   idInSalarioBase e idInProducao; cria new Funcionario(...);
//   escreve o contracheque em #idOutContraCheque.

// ============================================================
// 6. OUTRA FORMA DE LIGAR EVENTOS (projetos sem módulo)
// ============================================================
// No HTML:  <button type="button" onclick="calcularIMC()">CALCULAR</button>
// No HTML:  <script src="js/calcular.js"></script>   (SEM type="module")
//
// O erro do engine.js foi misturar as duas formas:
//   btn.addEventListener('onclick', eventoCriarConjunto())   // ERRADO
// Correto:
//   btn.addEventListener('click', eventoCriarConjunto)       // nome 'click' e sem ()
