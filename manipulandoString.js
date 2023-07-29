var s = "I am THE Witcher, is f*ckin Witcher ";

console.log(s);

console.log(s.length); // ver quantos caracteres há nessa string;

console.log(s.indexOf("Witcher")); // qual a primeira posição a palavra escolhida está

console.log(s.lastIndexOf("Witcher")); // qual a ultima posição a palavra escolhida está

console.log(s.slice(21,27)); // retorna qual palavra está entre essa posição

console.log(s.substr(21,6)); // retorna a palavra que está na posição 21, até 6 caracteres a frente;

console.log(s.replace("Witcher", "Wizard")); // substituindo palavras;

console.log(s.toUpperCase()); // deixa e CapsLock

console.log(s.toLowerCase()); // deixa em caixa baixa;

console.log(s.concat("!!! ", "you ", "understand now ?")); // adicionar mais strings 

var a = "Gerald,Yennefer,Dandelion,Triss,Ciri";

console.log(a.split(",")); // retorna a string 'a', separada como um Array;

