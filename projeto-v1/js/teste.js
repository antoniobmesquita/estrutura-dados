conjunto = [1,4,7,2]
vetor2 = []
function criarConjunto2(vetor) {
    vetor2 =[]
    for (let i = 0; i < vetor.length; i++) {
        vetor2[i] = vetor[i]
        
    }
    return vetor2
}

conjunto2 = criarConjunto2(conjunto)
console.log(conjunto)
console.log(conjunto2)