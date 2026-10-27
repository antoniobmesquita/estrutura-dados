function coletarDados(evento) {
/****************************************************************
 * O comando evento.preventDefault() serve para cancelar 
 * o comportamento padrão que o navegador executaria ao 
 * disparar aquele evento.
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * No contexto do seu código:
 * O comportamento padrão de um formulário (<form>): ao ser 
 * submetido (evento "submit"), o navegador tenta enviar os 
 * dados para um servidor e recarrega a página inteira.
 * O que acontece sem o comando: a página recarregaria instantaneamente, 
 * limpando todos os campos e apagando o resultado antes mesmo de dar 
 * tempo de visualizá-lo na tela.
 * O papel dele aqui: ele bloqueia esse recarregamento automático. 
 * Assim, o JavaScript consegue capturar os valores digitados e 
 * injetar o texto dentro da div (idOutResultado) mantendo o 
 * usuário na mesma página sem interrupções.
 */
  evento.preventDefault();

  let nome = document.getElementById("idInNome").value;
  let peso = Number(document.getElementById("idInPeso").value);
  let altura = Number(document.getElementById("idInAltura").value);
  let sexo = document.getElementById("idInSexo").value;
  let resultado = document.getElementById("idOutResultado");

  resultado.innerHTML =
    "Nome: " + nome + "<br>" +
    "Peso: " + peso + "<br>" +
    "Altura: " + altura + "<br>" +
    "Sexo: " + sexo;
}
/*  *************************************************************
    Esse comando é responsável por vincular o disparo do 
    formulário à execução da função JavaScript.
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    document.getElementById("idFormulario"): localiza e 
    seleciona a tag <form> no documento HTML por meio do 
    seu atributo id="idFormulario"
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    .addEventListener(...): registra um ouvinte de eventos 
    no elemento selecionado, instruindo o navegador a monitorar 
    uma ação específica do usuário.
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    "submit": define o tipo de evento que será monitorado, 
    que é o envio padrão do formulário.
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    coletarDados: é a função que será chamada quando o 
    evento acontecer. O navegador passa automaticamente o 
    objeto do evento (evento) para ela, permitindo que a 
    linha evento.preventDefault() dentro da função cancele o 
    recarregamento padrão da página. 
*/
document.getElementById("idFormulario").addEventListener("submit", coletarDados);
/*
    Porque a função coletarDado nesta chamada não tem parametro.
    Essa diferença ocorre porque o método addEventListener trabalha passando 
    a função como referência (callback), e não executando-a de imediato.
    Passagem por referência: ao escrever addEventListener("submit", coletarDados), 
    não usamos parênteses () ao lado do nome da função. 
    Isso diz ao navegador: "guarde esta função e execute-a apenas 
    quando o evento submit acontecer".
    Injeção automática do argumento: no momento em que o formulário é enviado, 
    o próprio motor do navegador executa a função por baixo dos panos 
    e fornece automaticamente um objeto do tipo Event como primeiro argumento. 
    Ele faz internamente algo equivalente a: coletarDados(objetoDoEvento);
    O papel de (evento) na declaração: o parâmetro na assinatura function 
    coletarDados(evento) serve apenas para receber e dar um nome a esse 
    objeto que o navegador já envia por padrão. 
    Esse nome é arbitrário (poderia ser e, ev ou event), e dá acesso 
    aos métodos e propriedades do disparo, como evento.preventDefault().
*/