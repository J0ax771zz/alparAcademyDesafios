//Começamos declarando a variável para ler as entradas do usuário
const prompt = require('prompt-sync')();


//Declarando as principais variáveis
let valorProduto = prompt("Digite o valor do produto: ");
let cupomDesc = prompt("Digite o cupom de desconto: ");
let ufUser =prompt("Digite o UF do seu estado: ").toUpperCase();
let frete = 0;

//Fução para gerar o ICMS utilizando o Math.random que gera um número aleátorio
function gerarICMS(min, max){
    return Math.random() * (max -min) + min;
}

//Passanado que o valor máximo do nosso ICMS é 25% e o minímo é 12%
let porcentagemICMS = gerarICMS(12, 25);


//Função para calcular o desconto
function calcularDesconto(preco, desconto){
    return preco - (preco * (desconto/100));
}


//Nesta função aplico o desconto e ativo uma das regras que o usuário só receberá
// o desconto se utilizar o cupom: CUPOM15;
function aplicarDesconto(){
    if(cupomDesc.toUpperCase() == 'CUPOM15'){
        return calcularDesconto(valorProduto, 15);
    }else{
        return valorProduto;
    }
}

let valoComDesconto = aplicarDesconto();




 // Verificando o estado do usuário atráves da UF 
if(ufUser === "SP"){
    frete = 10;
}else if(ufUser === "RJ"){
    frete = 20;
}else if(ufUser.length > 2){
    console.log("UF inválida");
}else{
    frete = 30;
}

//Calculando e adicionando o ICMS ao valor do produto
function calcularICMS(preco, percICMS){
    let precoICMS = preco * (percICMS/100);
    return preco + precoICMS;
}


let valorComICMS = calcularICMS(valoComDesconto, porcentagemICMS);

let valorTotal = valorComICMS + frete;


//Exibindo os dados ao usuário
console.log(`Preço do produto: R$${valorProduto}
    Preço com desconto: R$${valoComDesconto}
    Porcentagem de ICMS: ${porcentagemICMS.toFixed(2)}
    Preço do produto com ICMS: R$${(valorComICMS).toFixed(2)}
    Valor do frete: R$${frete}
    Valor total: R$${(valorTotal).toFixed(2)}`);
