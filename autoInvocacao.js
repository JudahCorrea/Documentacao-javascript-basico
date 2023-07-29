// fazer escopo dentro d o JS, é chamada de Auto Invocação
// é uma forma de assim que declarar uma função, voce já chamar ela

(function (){
    var a = 1;
    console.log("ola");
    console.log(a);
})

();

// console.log(a); - mesmo o " a " estando declarado, se eu chamar a variavel a, ele não compila, isso ocorre devido a variaavel " a " está declarada apenas no escopo da função.