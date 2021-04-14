function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n 1 - Aceita, pois treinou a vida toda para isso. \n 2- Não aceita, pois não quer enfrentar zumbie.')
         if(repostaFinal === '1'){
             return `
             <body class="fugindo">
             <nav class="passou">
                <h1>você ganhas novas armaduras e está pronto para a guerra.</h1>
                
                <h2>você precisa tomar uma decisão muito difícil. Os zumbies parecem estar dominando Resillium
                ou você se rende ou levanta a esperança de seu exército e lhes dá motivos para continuar, os
                faz lembrar de como eram os vales e como as crianças eram felizes por morarem neste lugar. 
                você :</h2>
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
            <h2>Você acaba sendo atacado naquela noite e suas armaduras 
            não eram fortes o suficiente para defende-lo, você foi mordido</h2>
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