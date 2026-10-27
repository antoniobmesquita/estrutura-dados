import {Paciente} from "./paciente.js";

const p1 = new Paciente("Godofredo", 100, 1.90, "Masculino")
const p2 = new Paciente("Maria", 70, 1.80, "Feminino")

console.log(p1)
console.log("Valor do IMC: " + p1.calcularIMC())
console.log(p2)
console.log("Valor do IMC: " + p2.calcularIMC())

p1.peso = 70;
p1.altura = 1.80;


p2.peso = 60;
p2.altura = 1.90;

console.log(p1)
console.log("Valor do IMC: " + p1.calcularIMC())
console.log(p2)
console.log("Valor do IMC: " + p2.calcularIMC())
