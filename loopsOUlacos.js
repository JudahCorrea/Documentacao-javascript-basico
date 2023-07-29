// For ; for in; while; do while .

var x = 0;

/*
while(x < 10){
    console.log("X é igual a " + x ); // esse " + " não realiza SOMA alguma, este sinal em conjunto com uma string, realiza uma concatenação
     x = x + 1;
}
*/

do{
    console.log("X é igual a " + x);
    x = x + 1;
}while(x > 1);

for( var y = 0; y < 10; y = y + 1){ // sintaxe : definição ; condição ; instrução ou statement
    console.log(y);
}

// for in : intera entre as variaveis de um objeto

var obj = {
    nome: 'jon',
    sobrenome: 'Snow'
}

for( var prop in obj ){  // ele retorna as chaves do objeto,  chamando elas na variavel temporaria "prop".
    console.log(prop);
    console.log(obj[prop]); // retorna os valores das variaveis no objeto obj, interadas na variavel temporaria "prop" 
}