// 1 - evitar declarar variaveis no escopo Global

var variavelGlobal = " isso pode dar problema";

// o ideal é realizar uma função auto executavel, para gerar um escopo local;

(function(){
    var variavelLocal = " agora está certo ";
})();

/*---------------------------------------------------------------------------------------*/

// 2 - sempre declare suas variaveis no topo (cabeçalho) de um código

(function(){
    var aqui;
    var porExemplo;
    var ficaMais;
    var legivel;

})();

/*--------------------------------------------------------------------------------------*/

// 3 - no JS pode criar varias variaveis a partir de uma unica declaração;

(function(){
    var exemplo,
        deDeclaracao,
        deVarias,
        variaveis;
    
})();

/*--------------------------------------------------------------------------------------*/

//4 - separe os assuntos de seu codigo com espaço;

(function(){
    var Array,
        obj,
        escopo; // decalração;

    escopo = "isso é um assunto";
    console.log(escopo); // assunto da variavei 'escopo';

    array = [
        "isso e",
        "outro",
        "assunto"
    ]; // assunto do array

    obj = {
        a : "mais um",
        b : "assunto",
        c : "diferente"
    }; // assunto do obj;

}());

