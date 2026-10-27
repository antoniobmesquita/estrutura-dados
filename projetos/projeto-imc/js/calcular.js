const inNomeCompleto = document.getElementById("idInNomeCompleto");
const inPeso = document.getElementById("idInPeso");
const inAltura = document.getElementById("idInAltura");
const btnCalcular = document.getElementById("btnCalcular");
const outResultado = document.getElementById("idOutResultado");


function calcularIMC() {
    const nomeCompleto = inNomeCompleto.value;
    const peso = Number(inPeso.value);
    const altura = Number(inAltura.value);
    const imc = peso / (altura * altura);
    const saida = `O IMC de ${nomeCompleto} é ${imc}`;
    outResultado.innerHTML = saida
}