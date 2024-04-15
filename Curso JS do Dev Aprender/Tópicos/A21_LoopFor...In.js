// Loop/Laço For..In
// Ótimo para iterar sobre Objetos.

const pessoa = {
    nome: "Caio",
    idade: 24,
    sexo: "M",
    casa: false
}
// key-value
for(let chave in pessoa){
    console.log(chave,pessoa[chave])
}

const cores = ["Azul", "Verde", "Rosa"];
for (let indice in cores){
    console.log(indice, cores[indice])
}