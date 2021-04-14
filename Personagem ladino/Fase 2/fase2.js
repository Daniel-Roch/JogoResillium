function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n 1 - Pegue a faca e use suas habilidades de ladino. \n 2- Corra para a janela, e pule por ela para tentar escapar.')
         if(repostaFinal === '1'){
             return `
             <body class="fugindo">
             <nav class="passou">
                <h1>Ao ir para cima do senhor, você consegue derrubá-lo, acertando com a faca o peito dele.</h1>
                <h2 class="fala"> -Desculpe, senhor, você veio para cima de mim!</h2>
                <h2>Porém o senhor começa a levantar e voltar a ficar de pé, como se nada tivesse acontecido.</h2> 
                <h2>Você então decide fugir pela porta, conseguindo desviar de uma senhora que tentou lhe agarrar ao lado da janela.</h2>
                <h2>Ao fugir da sua casa, você avista um cavalo parado, porém assustado, haviam 4 pessoas tentando agarrá-lo</h2>
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
            <h2>Ao pular a janela, você dá de cara com uma senhora com os olhos brancos que estava na frente da janela.</h2>
            <h2>A senhora consegue agarrar seu braço e morder com toda a força sua mão.</h2>
            <h2>A vista começa a escurecer, você sente muita dor e percebe que está desmaiando</h2>
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