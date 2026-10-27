/*
  Importação da classe Paciente
  Esse comando realiza uma importação nomeada (named import) 
  da classe Paciente a partir de um arquivo externo utilizando 
  o sistema nativo de módulos do JavaScript (ES Modules).
*/
import { Paciente } from './Paciente.js';

/**
 * Função nomeada para processar a submissão do formulário.
 * Lê as entradas do formulário, instancia o modelo Paciente e exibe o relatório formatado.
 * @param {Event} evento - Evento disparado pelo formulário.
 */
function processarFormulario(evento) {
  // Impede o recarregamento padrão da página
  evento.preventDefault();

  // Coleta dos valores informados no formulário
  const campoNome = document.getElementById('idInCampoNome').value;
  const campoPeso = parseFloat(document.getElementById('idInCampoPeso').value);
  const campoAltura = parseFloat(document.getElementById('idInCampoAltura').value);
  const campoSexo = document.getElementById('idInCampoSexo').value;

  try {
    // Instanciação do objeto Paciente aplicando o encapsulamento
    const paciente = new Paciente(campoNome, campoPeso, campoAltura, campoSexo);

    // Exibição dos dados formatados na tela se a criação for bem-sucedida
    apresentarResultado(paciente);
  } catch (erro) {
    // Caso a validação da classe lance um erro (ex: peso negativo), 
    // exibe um alerta
    // O comando alert(erro.message); exibe uma caixa de diálogo 
    // nativa do navegador contendo a mensagem descritiva do erro 
    // capturado no bloco catch.
    /**
     * Desmembrando os componentes:
     * erro: é a variável definida no parâmetro do bloco catch (erro). 
     * Quando uma exceção é disparada dentro do bloco try 
     * (por exemplo, via throw new Error(...) na validação de dados 
     * em Paciente.js), essa variável recebe a instância do objeto de erro gerado.
     * .message: é uma propriedade padrão do objeto Error em JavaScript. 
     * Ela contém exatamente o texto passado na criação do erro 
     * (como "O nome do paciente não pode ser vazio." ou 
     * "O peso deve ser um valor numérico maior que zero.").
     * alert(...): função nativa da interface do navegador 
     * que abre uma janela modal sobre a página com o texto do erro. 
     */
    alert(erro.message);
  }
}

/**
 * Função nomeada encarregada de renderizar o relatório de saída do paciente.
 * @param {Paciente} paciente - Objeto da classe Paciente com os dados e cálculos.
 */
function apresentarResultado(paciente) {
  const containerResultado = document.getElementById('idOutAreaResultado');

  // Montagem da estrutura de texto seguindo o layout especificado
  // CORREÇÃO: Utilizando os getters nativos (sem os parênteses () 
  // do 'get' e usando o nome direto)
  containerResultado.innerHTML = `
    <hr>
    <h2>CLÍNICA GYN</h2>
    <h3>DADOS DO PACIENTE</h3>
    <p><strong>Nome Completo:</strong> ${paciente.nome}</p>
    <p><strong>Peso:</strong> ${paciente.peso.toFixed(2)} kg</p>
    <p><strong>Altura:</strong> ${paciente.altura.toFixed(2)} m</p>
    <p><strong>Sexo:</strong> ${paciente.sexo}</p>
    <p><strong>IMC:</strong> ${paciente.calcularIMC().toFixed(2)}</p>
    <p><strong>Faixa de Risco:</strong> ${paciente.classificarFaixaRisco()}</p>
    <p><strong>Peso Ideal:</strong> ${paciente.calcularPesoIdeal().toFixed(2)} kg</p>
  `;
}

/**
 * Função nomeada responsável pela inicialização dos event listeners da aplicação.
 */
function inicializarAplicacao() {
  const formulario = document.getElementById('idFormularioPaciente');
  //console.log("TESTE");
  formulario.addEventListener('submit', processarFormulario);
}

// Registro do evento de inicialização após o carregamento completo do DOM
// reloud da Pagina - quando ele carrega a página
/*
  Este comando instrui o navegador a aguardar a construção completa da 
  árvore do DOM (o HTML estruturado) antes de invocar a 
  função inicializarAplicacao.
  inicializarAplicacao.
  Desmembrando os elementos:
  document: representa o objeto do documento HTML carregado 
  na janela do navegador.
  .addEventListener(...): registra um ouvinte de eventos no documento, 
  esperando que um estado ou ação específica aconteça para disparar 
  uma função de resposta (callback).
  'DOMContentLoaded': é o evento disparado pelo navegador assim 
  que todo o código HTML do documento é lido e analisado (parsed), 
  construindo os nós da árvore do DOM, sem precisar esperar o 
  carregamento de folhas de estilo externas, imagens ou sub-recursos visuais.
  inicializarAplicacao: é a função passada como referência que será 
  executada quando o evento acontecer. Dentro dela, busca-se o 
  formulário no DOM e atrela-se o ouvinte de submit.
  Por que esse comando é importante:
  Ele garante que elementos referenciados dentro de inicializarAplicacao, 
  como document.getElementById('formularioPaciente'), 
  já estejam efetivamente criados e disponíveis na memória 
  antes de qualquer tentativa de manipulação, prevenindo erros clássicos 
  de elemento nulo (null).
*/
document.addEventListener('DOMContentLoaded', inicializarAplicacao);