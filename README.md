<h1><strong>Desafios da Alpar Academy | Rocket Program 2.0 </strong></h1>

<h2>Dia 01</h2>
<h3><strong>Desafio 1 - Bhaskara</strong></h3>
<p>Faça um programa em Javascript para calcualr os valores de x1 e x2 da fórmula de Bhaskara, usando as variáveis
a,b,c e mostre os valores x1 e x2. Usando os operadores de atribuição e aritméticos.</p>

<h3><strong>Desafio 1.1 - Calculadora de ICMS</strong></h3>
<p>A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto (desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)
 
O ICMS deverá ser calculado após o produto receber (ou não desconto). 
 
O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado. 
 
Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)</p>

<h2>Dia 02</h2>
<h3><strong>Desafio 1 - Reformular o desafio da formula de Bhaskara</strong></h3>
<p>Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se: <br>
a) A variável "a" é valida (não pode ser zero);<br>
b) Se não existem raízes reais, e informar;<br>
c) Se existe apenas uma raíz real, e informar essa raíz; <br>
d) Se existem duas raízes, e as informar</p>

<h3><strong>Desafio 1.1 - Melhorar a calculadora de ICMS</strong></h3>
<p>Vocês lembram do desafio de ontem? Pois é! Vamos dar uma evoluída nele! 
 
Até o momento, a pessoa poderia ganhar um desconto randomicamente (ou não). Agora, o comprador pode colocar um cupom "PROMO15", que garante 15% de desconto no valor do produto. A pessoa pode colocar o código OU ganhar o desconto. 
 
Vamos também inserir questão de frete para o envio da compra. O comprador precisa colocar o estado em que ele está. Se for de SP, o frete custa R$10,00. Se for do RJ, o frete é R$20,00 e, para os demais estados, o frete é R$30,00</p>

<h2>Dia 03</h2>
<h3><strong>Desafio 1 - Jogo de adivinhação</strong></h3>
<p>Crie um programa que simula um jogo de adivinhação. O programa deve gerar um número
aleatório entre 1 e 100 e permitir que o usuário tente adivinhar o número. O programa
deve informar se o palpite é maior ou menor que o número secreto até que o usuário
acerte.
Regras:<br>
1. O número secreto deve ser gerado aleatoriamente entre 1 e 100.<br>
2. O usuário pode fazer quantas tentativas quiser até acertar.<br>
3. Após cada tentativa, o programa deve exibir se o número é maior ou menor que o
palpite.<br>
4. Quando o usuário acertar, o programa deve exibir uma mensagem de parabéns e o
número de tentativas usadas.<br>
Dica:
Para gerar um número aleatório em Javascript, você pode usar o código:
Math.round(Math.random() * 100);
Math.random() é uma função que gera um número aleatório entre 0 e 1, e multiplicando
por um número, você pode obter valores entre 0 e o número escolhido;<br>
Math.round() arredonda um número para inteiro, 5.4 é arredondado para 5, e 5.5 é
arredondado para 6</p>

<h3><strong>Desafio 1.1 - Jogar dados</strong></h3>
<p>Vamos jogar dados?
 
O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
1 - Se o resultado do dado for ímpar, o jogador recebe 10 pontos
2 - Se o resultado do dado for par, o jogador perde 5 pontos.
3 - Se a rodada for múltipla de 3, o jogador ganha 15 pontos
4 - Se a rodada for múltipla de 4, o jogador perde 20 pontos
5 - Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 
O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.
 
Vocês não podem usar arrays para a execução do desafio
Utilizem os conceitos estudados até o momento para executar
O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.
A pontuação final deverá ser exibida na última rodada.
Poderá ser exibido em tela avisos de ganho e perda de pontos
 
Divirtam-se!</p>

<h2>Dia 04</h2>
<h3><strong>Desafio 1 - Lista de compras</strong></h3>
Crie um programa simples que simula um gerenciador de lista de compras. O usuário poderá adicionar itens à lista, remover itens e visualizar a lista de compras. O programa deve usar vetores (arrays) e funções para organizar o código.

Regras:

O programa deve ter um array chamado listaDeCompras que começa vazio.
Deve oferecer as seguintes opções ao usuário:
Adicionar um item à lista.
Remover um item da lista.
Exibir os itens da lista.
Sair do programa.
O programa deve rodar até que o usuário escolha sair.
As funções devem ser utilizadas para organizar as operações principais:
adicionarItem(item): Adiciona um item ao array.
removerItem(item): Remove um item do array (se existir).
exibirLista(): Mostra todos os itens da lista no console.
Dicas:

Use console.log() para exibir mensagens.
Para manter o programa rodando, utilize um loop while e um switch-case para as opções.
Você pode pesquisar na internet como usar ou como fazer alguma parte do programa, mas tente não usar IA para resolver o desafio, não engane a si mesmo


<h3><strong>Desafio 1.1 - Avaliação de equipes</strong></h3>
Boa tarde senhores e senhora!
 
Desafio de hoje está tranquilinho, está lúdico, está sextante! 
 
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho


<h2>Dia 05</h2>
<h3><strong>Desafio 1 - Gerenciamento de usuários</strong></h3>
Crie um programa simples que permite ao usuário gerenciar um cadastro de pessoas. Cada pessoa terá um nome, idade e e-mail armazenados como um objeto dentro de um array. O usuário poderá adicionar, remover e listar os cadastros.

Regras:

1. O programa deve armazenar os usuários em um array de objetos, onde cada objeto representa uma pessoa com as propriedades:
nome
idade
email
2. O usuário poderá escolher entre as seguintes opções:
Adicionar um novo usuário.
Remover um usuário pelo email.
Listar todos os usuários cadastrados.
Sair do programa.
O programa deve rodar até que o usuário escolha sair.
Não pode haver mais de um usuário com o mesmo e-mail.
