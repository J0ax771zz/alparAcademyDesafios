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
