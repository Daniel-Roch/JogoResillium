function perguntaResposta(reposta){
   var repostaFinal = 0;
   var contador = 0
    while(contador < 5){
   repostaFinal = prompt('Faça sua escolha: \n 1 Olhe pela porta da janela para ver o que é o barulho \n 2- Abra a porta da frente, para investigar o barulho.')
        if(repostaFinal === '1'){
            return `
            <body class="olhos-brancos">
            <nav class="passou">
            <h2>Você percebe uma criatura de olhos brancos olhando para seu rosto.</h2>
            <h2>Você leva um susto e logo percebe que a criatura percebeu que você estava ali, olhando para ela.</h2>
            <h2>Então a criatura começa a bater na porta com toda a força, até quebrar a porta!</h2>         
            <a class="continua" href="../Fase 2/fase2.html">Continuação..</a>
            </nav>
            </body>`;
        }
        else if(repostaFinal === '2'){
            return `<body class="gameOver">
            <nav class="game-over">
            <h1 class="fimDoJogo">Game Over!</h1>
            <h2> Você abre a porta e dá de cara com uma criatura de olhos brancos que agarra seu braço.</h2>
            <h2> Com toda a força, a criatura morde seu braço, arrancando um pedaço.</h2>
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