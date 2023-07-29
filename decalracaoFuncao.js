function dizerOi(nome){ // declarar função: function + nome + argumento;
    console.log("Ola " + nome); // o que a função faz;
}

dizerOi("Jon"); // "chamar" a função;

var dizerOla = function  (nome) { // declarar função a partir de uma variavel: chamase esse tipo de função de função anonima, extamente por não ter nome;
    console.log("ola " + nome);
}

dizerOla("emanuel");

var dizerTchau = new Function("nome" ,"console.log('Tchau ' + nome);"); // construção de função a partir de uma string;

dizerTchau("mundo");

