var obj = {}; // declaração

var obj1 = { // declaração de um objeto, alocando propriedades
    nome: "Jon", 
    sobrenome: "Snow", 
    idade: 16,
    apresentar : function(){
        console.log("Ola, eu sou "+ this.nome + " " + this.sobrenome + ".");
    },
    mostrar: mostrarIdade // chamando função
};

// acessando os campos de um objeto

console.log(obj1);

obj1.apresentar();

console.log(obj1.idade);

// demostração de um objeto chamando uma função

function mostrarIdade(){
    console.log("tenho "+ this.idade + " anos de idade");
}

obj1.mostrar(); // como a variavel 'mostrar' está recebendo um método, é necessario o uso de parenteses.