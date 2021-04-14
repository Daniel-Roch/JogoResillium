function perguntaResposta(reposta){
   var repostaFinal = 0;
   var contador = 0
    while(contador < 5){
   repostaFinal = prompt('Faça sua escolha: \n Digite 1 para dizer: "olá, posso ajudar em alguma coisa?" \n Digite 2 para encostar no Sr. e virá-lo')
        if(repostaFinal === '1'){
            return `
            <body class="olhos-brancos">
            <nav class="passou">
            <h2>O senhor vira para o ladino com os olhos brancos, fazendo um susurro de dor, ele vem em sua direção mostrando os dentes!</h2>
            <h2>Ele parece querer atacá-lo, dá 3 passos para trás e encontra em cima da mesa seu martelo.</h2>
            <br>
            <a class="continua" href="../Fase 2/fase2.html">Continuação..</a>
            </nav>
            </body>`;
        }
        else if(repostaFinal === '2'){
            return `<body class="gameOver">
            <nav class="game-over">
            <h1 class="fimDoJogo">Game Over!</h1>
            <h2> Ao encostar no ombro do senhor, ele vira rápidamente para trás e consegue agarrar seu braço.</h2>
            <h2> Ele olha diretamente para você e consegue mordê-lo!</h2>
            <h2> Sua visão começa a falhar e percebe que está desmaiando, não sabe se é pela dor ou algo o contaminou.</h2>
            <br>
            <a class="gameoverVoltar" href="./fase1part2.html">Tentar novamente?</a>
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