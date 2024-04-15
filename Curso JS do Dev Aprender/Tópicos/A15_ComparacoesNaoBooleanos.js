// Comparações Lógicas não Booleanos

// No Javascript, existem o conceito de Truthy e Falsy

/*
Os Falsy são:
- undefined
- null
- 0
- false
- '' (string vazia)
- NaN (Not a Number)
*/

// Truthy é qualquer valor que não seja os valores acima.

false || "Rafael" // "Rafael"
true || "Rafael" // true (retorna sempre o valor true que vier primeiro)
false || 1 || true // 1

let corPersonalizada = "";
let corPadrao =  "Azul";
let corPerfil = corPersonalizada || corPadrao
console.log(corPerfil);