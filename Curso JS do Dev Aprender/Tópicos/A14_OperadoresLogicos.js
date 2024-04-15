// Operadores Lógicos

// Operador lógico E (&&) -> Retorna True se os dois operandos forem TRUE.
let clt = true
let cnh = true
let maiorIdade = false
console.log(cnh && clt); // true
console.log(cnh && maiorIdade); // false

// Operador lógico OU (||) -> Retorna True se um dos operandos for true
console.log(cnh || maiorIdade); // true

// Operador NOT (!) -> Faz uma negação, "Se diferente de..."
let candidatoRecusado = !cnh
let candidatoAceito = !maiorIdade
console.log(candidatoRecusado); // false
console.log(candidatoAceito); // true
