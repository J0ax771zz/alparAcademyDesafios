function calcularMediaPonderada(notasEquipe){
    let somaPonderada = 0;
    let somaPeso = 0;

    notasEquipe.forEach((nota, index) => {
        let peso = (index % 2 === 0) ? 1 : 2;
        somaPonderada += nota * peso;
        somaPeso += peso
    });

    let media = somaPonderada / somaPeso;
    if(media >8){
         return media += 2;
    }else{
        return media
    }
}

//Criamos a função para atribuir as médias e calculos da equipe
function calcularMetricasEquipe(turma){
    /*
    Criamos um laço para percorrer todo o array de notas utilizando o forEach
    além de percorrer o array ele vai atribuindo a função para calcular a media ponderada de cada membro 
    */
    turma.forEach(membro =>{
        membro.media = calcularMediaPonderada(membro.notas);
    })

    /*
    Para realizar o calcúlo de quem foi melhor e pior utilizei o método de arrays e objetos .sort()
    Ele ordena o array em ordem crescente
    o seguinte calculo realiza que a = melhor nota, b = pior nota, subtraindo b de a temos a melhor e a pior
    avaliação
    aprendi este método no seguinte video: https://www.youtube.com/watch?v=0QpPkhHibkk&t=9s
    */
    turma.sort((a,b) => b.media - a.media);

    /*
    Como o array foi ordenado de forma crescente, só precisei criar duas variáveis
    na melhorAvaliacao acessamos o primeiro indice do array, pois está com a maior media graças ao .sort()
    na piorAvaliacao acessamos o último indice do array com o -1 pois está em último lugar
    */
    let melhorAvaliacao = turma[0];
    let piorAvaliacao = turma[turma.length -1];

    
    console.log("Desempenho equipe: ");

    /*Novamente chamamos o método forEach para percorrer todos os membros e apresentar seus:
    nomes, quantidade de tarefas e a média ponderada */
    turma.forEach(membro => {
        console.log(`Nome: ${membro.nome}, Quantidade de tarefas: ${membro.qntdTarefas}, Média Pomderada: ${membro.media.toFixed(2)}`);
    })

    //Exibimos quem obteve a melhor e pior avaliação da equipe
    console.log(`Melhor avaliação! Nome: ${melhorAvaliacao.nome}, Média: ${melhorAvaliacao.media.toFixed(2)}`);
    console.log(`Pior avaliação! Nome: ${piorAvaliacao.nome}, Média: ${piorAvaliacao.media.toFixed(2)}`);
    
}

//Criei um array de objetos para a equipe, pois foi a forma lógica que encontrei para solucionar o desafio
//De forma que os dados já venham imbutidos
equipe = [
    {nome: "João Paulo", qntdTarefas: 5, notas: [10,8,7,6,8]},
    {nome: "Cesar", qntdTarefas: 7, notas: [8,9,10,7,7,6,8]},
    {nome: "Maria", qntdTarefas: 5, notas: [9,8,7,6,8]},
    {nome: "Rebeca", qntdTarefas: 6, notas: [8,8,7,6,5,10]},
    {nome: "Elaine", qntdTarefas: 5, notas: [3,4,7,5, 10]},
]

//Validações de> equipe > 3, tarefas >= 5 && <10 e se tem o mesmo número de notas para quantidade de tarefas.
if(equipe.length >= 3){
    let notasValidas = equipe.filter(membro => membro.qntdTarefas === membro.notas.length);
    if(notasValidas.length === equipe.length ){
        calcularMetricasEquipe(equipe);
    }else{
        console.log("Você deve ter o mesmo número de notas e de quantidade de tarefas, verfique e volte novamente");
    }
}else{
    console.log("a equipe deve conter três ou mais colaboradores");
}



