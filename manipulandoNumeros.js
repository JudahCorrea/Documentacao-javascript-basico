var x = 34e5; // declarando uma notação sientifica: nesse exemplo o numero é 3400000;

var y = 123e-6; // notação cinetifica com potencias negativas. o numero em questão é : 0,000123;

var z = 9999999999999999; // ele arredonda para o maximo que aguenta 

console.log(z);

var a = 0.99999999999999999 // arredonda para o maximo suportado;

console.log(a);

var h = 0xFFF; // declasrando um numero HEXAdecimal

console.log(h);

var o = 07777; // declarando um numero OCTA

console.log(o);

// mostrando os numeros mudando sua base

var c = 255;

console.log(c.toString(16)); // hexadecimal

console.log(c.toString(8)); // octadecimal

console.log(c.toString(2)); // binario

// mostrando por anotação cinetifica

var r = 450000000000;
var t = 0.0000000045;
console.log(r);

console.log(r.toExponential());

console.log(r.toExponential(3)); // alterando as casas antes da virgula

console.log(t.toFixed(2)); // arredondando para casas decimais fixas;

console.log(t.toPrecision(3)); // este trabalha o numero de algarismos presentes no numero ;