const prompt = require('prompt-sync')();

let tentativaUsuario = parseInt(prompt("Digite um número: "));

let numero = Math.random() * 100;
let numeroInt = Math.round(numero);

let tentativas = 0;


while(tentativaUsuario !== numeroInt){
    if(tentativaUsuario > numeroInt){
        console.log("O número é MENOR");
    }else if(tentativaUsuario < numeroInt){
        console.log("O número é MAIOR");
    }

    tentativas++
    tentativaUsuario = parseInt(prompt("Tente novamente: "));
}

console.log(`Parabéns você acertou! O número era: ${numeroInt}. \n
    Você levou ${tentativas} tentativas!`);
