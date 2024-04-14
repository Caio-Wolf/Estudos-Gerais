// Functions = Funções

// Dica: Para nomear, sempre é bom colocar um Verbo + Substantivo
let corSite = "Azul";
console.log(corSite); // Azul


// FUNÇÃO SEM PARÂMETRO
function resetaCor(){
    corSite = " ";
}

resetaCor()
console.log(corSite); // Vazio.
//----------------
//----------------

// FUNÇÃO COM PARÂMETRO(S)
let corParede = "Rosa"
function resetarcor(cor, tonalidade = ' '){
    corParede = cor + " " + tonalidade
};
console.log(corParede);
resetarcor("Roxo", "Azulado")
console.log(corParede);