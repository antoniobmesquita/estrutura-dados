import { Paciente } from "./paciente.js";


/**
* @param { Event } evento
*/

function processarFormulario(evento) {
    evento.preventDefault()
    const nome = document.getElementById("idInNome").value;
    const peso = parseFloat(document.getElementById("idInPeso").value);
    const altura = parseFloat(document.getElementById("idInAltura").value);
    const sexo = document.getElementById("idInSexo").value;
    try {
        const paciente = new Paciente(nome, peso, altura, sexo)
        exibirResultado(paciente);
    } catch (erro) {
        alert(erro.message)
    }
}

/**
 * Função nomeada encarregada de renderizar o relatório de saída do paciente.
 * @param {Paciente} paciente - Objeto da classe Paciente com os dados e cálculos.
 */


function exibirResultado(paciente) {
    const campoResultado = document.getElementById("idOutAreaResultado");
    campoResultado.innerHTML = `
        <p>Nome Completo:   ${paciente.nomeCompleto} </p>
        <p> Peso:   ${paciente.peso} </p>
        <p> Altura: ${paciente.altura} </p>
        <p> Sexo:  ${paciente.sexo} </p>
        <p> IMC: ${paciente.calcularIMC()}</p>
        <p> Faixa de risco:   ${paciente.calcularFaixaDeRisco()} </p>
        <p> Peso ideal: ${paciente.calcularPesoIdeal()}</p>`
}
function inicializarAplicacao() {
    const formulario = document.getElementById("idFormularioPaciente");
    formulario.addEventListener('submit', processarFormulario)
}

document.addEventListener('DOMContentLoaded', inicializarAplicacao)