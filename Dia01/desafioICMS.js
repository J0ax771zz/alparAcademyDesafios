//Declarei as variáveis principais
let precoProduto = 199.99;
let possuiDesconto = true;


//Criei uma função para gerar um valor aleatório para o ICMS
function gerarICMS(min, max){
    const icms = Math.random() * (max - min) + min;
    return Number(icms.toFixed(2));
}

//Passando os parametros da função com o minimo sendo 12 e o máximo 25
const valorPorcentagemICMS = gerarICMS(12, 25);


//Função para calcular o desconto
function calcularDesconto(){
    //Utilizeio if para verificar a booleana possui desconto
    if(possuiDesconto){
        let desconto = 10;
        let precoComDesconto = precoProduto * (desconto/100);
        let valorProdutoComDesconto = precoProduto - precoComDesconto;
        return valorProdutoComDesconto;
    }
    //Caso for false apenas retorna o preço normal
    return precoProduto;
}

let valorProduto = calcularDesconto();


//Funcao para calcular o ICMS
function calcularICMS(){
    let valorICMS = valorPorcentagemICMS;
    let precoICMS = valorProduto * (valorICMS/100);
    let valorFinal = valorProduto + precoICMS;
    return valorFinal.toFixed(2);
}

let precoFinal = calcularICMS()


//Mostrando para o usuário os resultados
console.log(`Valor do produto: R$${precoProduto}
    Teve desconto? ${possuiDesconto}
    Preço com desconto: R$${valorProduto.toFixed(2)}
    Porcentagem do ICMS: ${valorPorcentagemICMS.toFixed(2)}
    Valor final com ICMS: R$${precoFinal}`);