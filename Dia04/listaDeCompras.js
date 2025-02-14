//importamos a bibilioteca prompt para ler as entradas do usuário.l
const prompt = require("prompt-sync")();

//Criamos um vetor vazio para ir armazenamdo os dados
let listaDeCompras = [];


//Está função captura o item e o adiciona ao primeiro indice do vetor(listaDeCompras)
//Ela precisa de um parâmetro item pois quando for chamada irá receber a entrada do usuário
function adicionarItem(item){
    listaDeCompras.push(item);
    //Exibimos ao usuário que o item foi adicionado a lista de compras
    console.log(`O item ${item} foi adicionado a lista de compras!`);
}

/*
Nesta funcão utilizamos alguns métodos de manipulação de array
.indexOf = irá iterar sobre todo o array atrás do item que é passado como paramêtro da funcção
.splice = irá excluir o item do array, e passamos que só queremos que 1 item seja excluido
Depois retornamos ao usuário o item e que ele foi removido com sucesso
*/
function removerItem(item){
    let indice = listaDeCompras.indexOf(item);
    if(indice !== -1){
        listaDeCompras.splice(indice, 1);
        console.log(`o item ${item}, foi removido da lista de compras`)
    }else{
        console.log(`O ${item} não foi encontrado! Tente novamente`);
    }
}

//Nessa função utilizamos o metódo forEach pois ela só precisa iterar sobre todo o array
//E mostrar o resultado ao usuário
//Outro método que poderiamos usar seria o for(valor of listaDeCompras) que também funciona
function listarCompras(){
    if(listaDeCompras.length === 0){
        console.log("A lista de compras está vazia")
    }else{
        listaDeCompras.forEach(valor => console.log(valor));
    }
}

//Variável para armazenar a opção do usuário
let opcao = 0;


//Loop para mostar o menu e tbm chamar as funções
while(opcao != 4){
    console.log(`Digite uma das opções abaixo: \n
        [1]- Adicionar Item a lista de compras \n
        [2]- Remover Item da lista de compras \n
        [3]- Ver a lista de compras \n
        [4]- Sair`);
    
    //Precisamos fazer o casting da opção pois o metódo prompt sempre retorna uma (string);
    opcao = parseInt(prompt("Digite uma opção: "));

    //Criamos um switch case para ter um controle de todas as opções do usuário
    /*Quando chamei as funções utilizei o método toLowerCase() na estrada do usuário
     por que o usuário pode esquecer como digitou o item e quando for exlcuir gerar algum erro
     Desta forma ele escrevendo a primeira letra ou o item todo em maiusculo irá funcionar sem "problemas"*/
    switch(opcao){
        case 1: let nomeProduto = prompt("Digite o nome do produto: ");
                adicionarItem(nomeProduto.toLocaleLowerCase());
                break;
        
        case 2: let nomeProdutoRemover = prompt("Digite o nome do produto que deseja remover: ");
                removerItem(nomeProdutoRemover.toLowerCase());
                break;
        
        case 3: listarCompras();
            break;

        case 4: console.log("Obrigado por usar nosso sistema");

        //"Forçamos" o usuário utilizar uma entrada válida
        default:
            console.log("Opção inválida! Tente novamente");
    }
}