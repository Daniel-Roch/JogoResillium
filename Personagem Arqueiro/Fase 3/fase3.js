function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n 1 - você não sabe o que fazer, são muitos zumbies e muitos mortos. \n 2- você como um líder começa a falar sobre ter a paz de volta e no futuro de Resillium')
         if(repostaFinal === '1'){
             return `
             <body class="gameOver">
             <nav class="game-over">
             <h1 class="fimDoJogo">Game Over</h1>
             <h2>você e seu exército se rendem e são devorador por zumbies</h2>
             <a class="gameoverVoltar" href="../Fase 1 part2/fase1part2.html">Tentar novamente?</a>
             </nav>
             </body>
             `;
            }
            else if(repostaFinal === '2'){
            return `
            <body class="fugiu">
            <nav class="passou">
            <h2>seus companheiros de batalha lhe ouvem e escolhem morrer ajudando.</h2>
            <h2>Você entra em contato com o espirito de seu pai que lhe mostra técnicas ancestrais de 
            arco e flecha, em apenas 2 segundos você teve contato com líderes arqueiros e lhe foi
            repassado os segredos de flechas infinitas e sobre seu espirito antepassado 'Softus'.</h2>
            <h2 class="pergunta">O que será que está acontecendo?</h2>
            <a class="continua" href="../../index.html">Continuação..?obrigado por jogar até aqui.</a>
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