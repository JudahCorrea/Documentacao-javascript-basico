var array = "jotaro joseph jonathan josuke".split(' '); // declarando uma string e convertendo para um Array.

console.log(array.toString());

console.log(array.join(' | ')); // mudando a forma como voce deseja juntar ( o metodo ganha o nome de " clue ", que nesse caso é o .join())o dado para formar um Array;

array.push("jonny"); // adicionando elemento no Array;
array.unshift("gionor"); // adicionando elemento no começo do Array;

console.log(array);

array.pop(); // remove o ultimo elemento de um Array;

console.log(array);

var elemento = array.pop(); // aloca o elemento que foi removido;

console.log(elemento);

console.log(array);

array.shift(); // reove o primeiro elemnto do Array;

console.log(array);

array[2] = "Jonathan Joestar"; // alterando um elemnto de um Array;

console.log(array);

var pedaco = array.slice(1/*1 argumento*/, 2 /*2 argumento*/);  // o primeiro argumento é o de partida, de onde voce quer comerçar a extrair o Array. O segundo Argumento é o ponto de parada sem incluir o ponto de partida;

console.log(pedaco); // a funçaõ .slice() não altera o Array original;

array.splice(0,1,"Jotaro Kujo", "Joline Kujo"); // os dois primeiros argumentos são para reomver um elemnto: o primeiro é a posição do elemento que deseja remover e o segundo é quantos elementos quer remover partindo do primeiro argumento. A partir doterceiro argumento é o que deseja incluir no Array; 

console.log(array); // o splice altera o Array original;

array = array.concat(pedaco); // concatenando Array;

console.log(array);