const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();});

    let pontos = document.querySelector("form #pontos");
    let rodada = document.querySelector("form #rodada");
    let pontosUsuario = 0;
    let rodadaAtual = 1;

    function gerarDado(max, min){
        return Math.round(Math.random()* (max - min)+min);
    }


    function jogarDado(face){
         
        if(pontosUsuario <0){
            pontosUsuario -= pontosUsuario *2;
        }
        
        if(face % 2 !== 0){
            pontosUsuario += 10;
        }else if(face % 2 == 0){
            pontosUsuario -=10;
        }

        if(rodadaAtual % 3 ===0){
            pontosUsuario += 15;
        }

        if(rodadaAtual %4 === 0){
            pontosUsuario -= 30;
        }

    }

    let jogar = document.querySelector("form button");

    jogar.addEventListener('click', function(){
    
        let dado = gerarDado(1,6);
        jogarDado(dado);

        let mensagem = `Rodada Atual: ${rodadaAtual} | Dado Rolado: ${dado} \nPontuação: ${pontosUsuario}`;
        let resultado = document.querySelector('form #resultado');
        resultado.innerText = mensagem;

        
        pontos.innerHTML = `<h1><strong>Pontos: ${pontosUsuario}</strong></h1>`;
        rodada.innerHTML = `<h1><strong>Rodada: ${rodadaAtual}</strong></h1>`;

        rodadaAtual++;

        if(rodadaAtual == 21){
            if(pontosUsuario >=50){
                resultado.innerText = `Parabéns você ganhou! atingiu ${pontosUsuario} pontos!`;
            }else{
                resultado.innerText = `Você perdeu! não atingiu os 50 pontos!`;
            }
        }

        
    })


