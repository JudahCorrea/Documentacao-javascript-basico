function dizerOi(nome){
    console.log("Oi "+ nome);
}

dizerOi("Judah"); // invocação de funçaõ pelo nome e atribuição;

dizerOi.call({}, "Joana"); // chama a função a apretir de um objeto;

dizerOi.apply({}, ["mundo"]); // define um objeto para chamr a função tambem, mas o que é o passado para o argumento é um Array[].
