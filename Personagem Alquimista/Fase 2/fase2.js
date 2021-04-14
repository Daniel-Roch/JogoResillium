function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n 1 - Use seu conhecimentos de alquimia, para jogar uma poção em cima do estranho. \n 2- Corra até a porta dos fundos para fugir.')
         if(repostaFinal === '1'){
             return `
             <body class="fugindo">
             <nav class="passou">
                <h1>Jogando a poção que estava em seu bolso ao qual você estava preparando ainda, e não sabia se iria dar certo.</h1>
                <h2>A criatura entra em chamas e você consegue desviar rapidamente para a porta e fugir.</h2>
                <h2>Logo mais a frente de sua casa, você vê sua carroça parada, e seu cavalo bastante assustado, pois haviam mais duas criatura cercando o pobre animal</h2>
                <a class="continua" href="../Fase 3/fase3.html">Continuação..</a>
            </nav>
            </body>
                `;
            }
            else if(repostaFinal === '2'){
            return `
            <body class="gameOver">
            <nav class="game-over">
            <h1 class="fimDoJogo">Game Over</h1> 
            <h2>Ao tenta fugir pela porta dos fundos.</h2>
            <h2> você se depara com outra criatura de olhos brancos que estava em frente a porta.</h2>
            <h2> Era uma jovem senhora que aparenta-va ter por volta de uns 18 anos.</h2>
            <h2> Ela consegue agarrar seus ombros e consegue morder com toda força seu pescoço</h2>
            <h2> Fazendo você desmaiar de dor</h2>
            <a class="gameoverVoltar" href="../Fase 1 part2/fase1part2.html">Tentar novamente?</a>
            </nav>
            </body>`;
         }
         else{
         repostaFinal = alert('Coloque o numero certo!') 
         }
     }
     return repostaFinal
}
var reposta1 = perguntaResposta()
document.write(reposta1);