function perguntaResposta(reposta){
   var repostaFinal = 0;
   var contador = 0
    while(contador < 5){
   repostaFinal = prompt('Faça sua escolha: \n 1 -pega seu arco e flecha, e se prapara para usa-los. \n 2- pega seu arco e vai saber o que está acontecendo.')
        if(repostaFinal === '1'){
            return `
            <body class="olhos-brancos">
            <nav class="passou">
            <h2>você é escolhido para ser o capitão do exército de arqueiros de Resillium, você ganhará
            novas armaduras impenetráveis, porém você se sente estranho , pois nunca havia 
            abatido zumbies antes, o você faz? :</h2>            
            <a class="continua" href="../Fase 2/fase2.html">Continuação..</a>
            </nav>
            </body>`;
        }
        else if(repostaFinal === '2'){
            return `<body class="gameOver">
            <nav class="game-over">
            <h1 class="fimDoJogo">Game Over!</h1>
            <h2> você esqueceu suas flechas e foi atacado pelos zumbies.</h2>
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