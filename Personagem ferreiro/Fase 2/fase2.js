function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n Digite 1 para: Pegar seu martelo e atacar o senhor \n Digite 2 para: Usar o martelo para tentar afastar o senhor e fugir')
         if(repostaFinal === '1'){
             return `
             <body class="fugindo">
             <nav class="passou">
                <h1>Com sua força extrema de ferreiro, você acerta um golpe na cabeça do senhor o matando na hora.</h1>
                <h2>Ao olhar em volta, percebe que todo vilarejo de Resillium está um verdadeiro caos, casas pegando fogo,
                pessoas correndo desesperadas, e pessoas com uma aparencia estranha, cheias de sangue em suas bocas,
                algumas até sem membros do corpo e mesmo assim andando por todo lado, um grupo delas estava agachado 
                chão, em volta de um corpo caído e aparentemente comendo aquele corpo, abrindo sua barriga, retirando
                as visceras e colocando diretamente na boca.</h2>
                <h2>Sem entender porque aquelas pessoas aparentemente machucadas e cheias de sangue estavam comendo outras
                pessoas, o que você fará a seguir?</h2>
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
            <h2>Ao tentar empurrar o senhor para trás, você se preocupa em tentar não machucá-lo, abaixando sua guarda
            dando a oportunidade para ele agarrar seu braço e mordê-lo, arrancando um pedaço sigficante de seu membro.
            Desesperado você perde o controle e o senhor acaba te derrubando no chão, arrancando mais pedaços de seu
            corpo com a boca, fazendo com que você morra.</h2>
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