function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n 1 - Você tenta encarar as criatura, jogando uma poção que ainda está no seu bolso. \n 2 - Você corre até o cavalo, lançando um feitiço para acalma-lo.')
         if(repostaFinal === '1'){
             return `
             <body class="gameOver">
             <nav class="game-over">
             <h1 class="fimDoJogo">Game Over</h1>
             <h2>Ao jogar a poção, percebe que era uma simples poção de cura, e as criaturas conseguem virar em sua direção.</h2>
             <h2> Ambas as criaturas lhe agarram, e começam a morder seu pescoço e seu braço.</h2>
             <h2> Você acaba desmaiando pela dor</h2>
             <a class="gameoverVoltar" href="../Fase 1 part2/fase1part2.html">Tentar novamente?</a>
             </nav>
             </body>
             `;
            }
            else if(repostaFinal === '2'){
            return `
            <body class="fugiu">
            <nav class="passou">
            <h2>O cavalo se acalma e você consegue subir na carroça!</h2>
            <h2>Com um comando de voz, o cavalo sai em disparada, levando a carroça que estava amarrado a ele.</h2>
            <h2> A carroça acerta as duas criaturas, que desabam no chão.</h2>
            <h2> Já longe da sua casa, ao olhar para trás você percebe que muitas criaturas ainda estavam em volta de sua casa.</h2>
            <h2> O que será que aconteceu com essas terras, criaturas humanoides atacando sua casa, ao qual é a mais distante de toda a vila.</h2>
            <a class="continua" href="../../index.html">Continuação?..obrigado por jogar até aqui.</a>
            </nav>
            </body>
            `;
         }
         else{
         repostaFinal = alert('Coloque o numero certo!') 
         }
     }
     return repostaFinal
}
var reposta1 = perguntaResposta()
document.write(reposta1);