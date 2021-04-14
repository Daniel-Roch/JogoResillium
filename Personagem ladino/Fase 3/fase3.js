function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n 1 - "Esqueça o cavalo e tente correr para fora da vila." \n 2- "Corra até o cavalo, e tente pegá-lo."')
         if(repostaFinal === '1'){
             return `
             <body class="gameOver">
             <nav class="game-over">
             <h1 class="fimDoJogo">Game Over</h1>
             <h2>Ao correr, os zumbis lhe avistam e vão atrás de você.</h2>
             <h2>Quando você olha para trás, e volta a olhar para a frente, 2 pessoas te agarram e começam a morder você.</h2>
             <h2>Eles começam a morder toda as partes do seu corpo, você começa a sentir que está perdendo a consciência.</h2>
             <a class="gameoverVoltar" href="../Fase 1 part2/fase1part2.html">Tentar novamente?</a>
             </nav>
             </body>
             `;
            }
            else if(repostaFinal === '2'){
            return `
            <body class="fugiu">
            <nav class="passou">
            <h2>Ao correr até o cavalo, você pula em um feno e consegue montá-lo.</h2>
            <h2>Você dá um berro para que ele corra, e vocês dois conseguem desviar das 4 pessoas que estavam tentando pegá-lo.</h2>
            <h2>Todos estavam de olhos brancos e fazendo barulhos de dor.</h2>
            <h2>Você consegue sair daquela vila o mais rápido possível, deixando tudo para trás.</h2>
            <h2>Mesmo se afastando da vila, você escuta vários gritos, e ao olhar para trás, consegue avistar o mesmo senhor em quem você enfiou a faca, 
            mordendo o braço de um homem que aparentava ter uns 20 anos.</h2>
            <h2 class="pergunta">O que será que está acontecendo?</h2>
            <a class="continua" href="../../index.html">Continuação..? Até o momento não há, obrigado por jogar até aqui.</a>
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