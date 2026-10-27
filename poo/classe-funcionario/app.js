import { Funcionario } from "./funcionario.js";

/** 
* @param { Event } evento 
*/

function processarFormulario(evento) {
    evento.preventDefault();
    const campoNumeroMatricula = Number(document.getElementById("idInNumeroMatricula").value);
    const campoNome = document.getElementById("idInNome").value;
    const campoNumeroDependentes = Number(document.getElementById("idInNumeroDependentes").value);
    const campoSalarioBase = Number(document.getElementById("idInSalarioBase").value);
    const campoProducao = Number(document.getElementById("idInProducao").value);

    try {
        const funcionario = new Funcionario(campoNumeroMatricula, campoNome, campoNumeroDependentes, campoSalarioBase, campoProducao);

        gerarContraCheque(funcionario)
    } catch (erro) {
        alert(erro.message)
    }
}


/** 
* @param { Funcionario } funcionario
*/

function gerarContraCheque(funcionario) {
    const containerContraCheque = document.getElementById("idOutContraCheque");

    containerContraCheque.innerHTML = `
    <hr>
    <section id="contracheque">
    <div id="cabecalhoContracheque">
    <h2>GYNALIMENTOS</h2>
    <h3>CONTRACHEQUE DO FUNCIOMÁRIO </h3>
    </div>
    <p><strong>Número da Matricula: </strong>${funcionario.matricula}</p>
    <p><strong>Nome: </strong>${funcionario.nome}</p>
    <p><strong>Número de dependentes: </strong>${funcionario.numeroDependentes}</p>
    <p><strong>Valor do salário base: </strong> R$ ${funcionario.salarioBase.toFixed(2)}</p>
    <p><strong>Valor da gratificação: </strong> R$ ${funcionario.calcularValorGratificacao().toFixed(2)}</p>   
    <p><strong>Valor do salário bruto: </strong> R$ ${funcionario.calcularSalarioBruto().toFixed(2)}</p>
    <p><strong>Valor do desconto do INSS: </strong> R$ ${funcionario.calcularDescontoINSS().toFixed(2)}</p>
    <p><strong>Valor do desconto do IRPF: </strong> R$ ${funcionario.calcularDescontoIRPF().toFixed(2)}</p>
    <p><strong>Valor do desconto por dependentes: </strong> R$ ${funcionario.calcularValorFinalIRPF().toFixed(2)}</p>
    <p><strong>Valor do salário liqudio: </strong> R$ ${funcionario.calcularSalarioLiquido().toFixed(2)}</p>
    </section>
    `
}

function inicializarAplicacao() {
    const formulario = document.getElementById("idFormularioFuncionario");
    formulario.addEventListener('submit', processarFormulario)
}

document.addEventListener('DOMContentLoaded', inicializarAplicacao)