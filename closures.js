//var contador = 0; // variavel global

function ola(){
    var a = 1; // variavel local: existe apenas dentro da fubção ola; 
    console.log(a);
}
//ola();
//console.log(a);

//function tick(){ // tick - é uma função de incremento;
//    contador = contador + 1;
//    console.log(contador);
//}

//tick();

//console.log(contador); // neste caso imprime fora do escopo da função, devido a variavel " contador " ser uma variavel global;



// Closures
var tick = (function(){ // função que tem acesso ao escopo pai, mesmo qu ele tenha sido sobrescrito;
    var contador  = 0;

    return function() {
        contador = contador + 1;
        console.log(contador);
    }
})();


tick();
tick();
tick();