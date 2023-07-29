function Armadura(nome, tamanho, forca){ // declaração de um prototype.
    this.nome = nome;
    this.tamanho = tamanho;
    this.forca = forca;

    this.ocupacao = "aventureiro";

    this.apresentar = function(){
        console.log("ola, eu sou " + this.nome + ".");
    }
}

var alphonse = new Armadura("Alphonse", "2.0", "5000"); // criando um objeto que herda o prototype 'armadura'.

var reiArtur = new Armadura("Artur", "1.7"," 200");

console.log(alphonse);
alphonse.apresentar();

console.log(reiArtur);

// adicionando algo no prototype 'Armadura';

Armadura.prototype.darTchau = function(){
    console.log("Tchau");
};

reiArtur.darTchau();

// Prototype é mto importante para ter mais dominio sobre os dados no JS, devido a linguagem tratar quase todos  como objetos advindos de um prototype. por exemplo:

String.prototype.apagar = function(){ // nesse caso quando chamar a função 'apagar' ( que agora foi alocada no prototype dos dados do tipo primitivo String), a String ficará fazia.
    return "";
}

console.log("olá mundo".apagar());