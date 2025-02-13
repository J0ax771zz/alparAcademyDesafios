//utilizamos a biblioteca prompt-sync para ler as entradas do usuário
const prompt = require('prompt-sync')();


let tentativaUsuario = parseInt(prompt("Digite um número: "));

//Criamos o número e arredondamos para um inteiro
let numeroInt = Math.round(Math.random() * 100);

let tentativas = 0;

//Definimos um loop para o usuário realizar as tentativas até acertar o número.
while(tentativaUsuario !== numeroInt){
    if(tentativaUsuario > numeroInt){
        console.log("O número é MENOR");
    }else if(tentativaUsuario < numeroInt){
        console.log("O número é MAIOR");
    }

    tentativas++
    tentativaUsuario = parseInt(prompt("Tente novamente: "));
}
//exibe a mensagem quando o usuário acertar o número
console.log(`Parabéns você acertou! O número era: ${numeroInt}. \n
    Você levou ${tentativas} tentativas!`);
