function perguntaResposta(reposta){
    var repostaFinal = 0;
    var contador = 0
     while(contador < 5){
    repostaFinal = prompt('Faça sua escolha: \n 1 - Você voltar para sua casa, trancar todas as entradas, se esconder em seu quarto e torcer para ninguem aparecer. \n 2- Fazer uma mala com seu martelo, alguns item de sua forja e um pouco de comida.')
         if(repostaFinal === '1'){
             return `
             <body class="gameOver">
             <nav class="game-over">
             <h1 class="fimDoJogo">Game Over</h1>
             <h2>Tentando não pensar no pior, você se tranca em casa e se esconde em seu quarto, desesperado, tentando
             entender o que esta acontecendo com todo mundo.</h2>
             <h2>Algumas horas depois o fogo do vilarejo que aparentava estar longe veio se espalhando com o vento,
             chegando até sua casa, ao tentar conter o fogo com o pouco de água que encontra em casa, você atrai
             a atenção de pessoas com aquela aparencia estranha, que estavam devorando outras pessoas. Elas
             invadem sua casa e sem falarem nada, apenas com gemidos, aparentemente de dor, te cercam e acabam
             te devorando vivo..</h2>
             <a class="gameoverVoltar" href="../Fase 1 part2/fase1part2.html">Tentar novamente?</a>
             </nav>
             </body>
             `;
            }
            else if(repostaFinal === '2'){
            return `
            <body class="fugiu">
            <nav class="passou">
            <h2>Enquanto esta arrumando sua mala para sair de casa em busca de um lugar seguro, você ouve de longe
            um grito de socorro, e você reconhece aquela voz. É a Rainha Tais!
            </h2>
            <h2>Enquanto termina de arrumar suas coisas com pressa, os gritos de socorro vão se intensificando,
            você sabe que a situação é crítica, a Rainha está em apuros. Você finalmente pega suas coisa 
            e sai as pressas. No caminho é atacado por essas estranhas pessoas que aparentam estar mortas, 
            mas seu martelo nunca te abandona. Chegando no saguão do castelo da Rainha, ensaguentado, você
            a vê correndo assustada, fugindo de uma figura sombria que está tentando pegá-la, ao se aproximar
            um pouco mais da situção ja com seu martelo em mãos, pronto para a luta, você descobre que a figura
            sombria é ninguem menos que o velho alquimista Izoton, ele tem a mesma aparencia das pessoas que
            estão atacando todos no vilarejo, mas também possui uma risada maligna, como se estivesse gostando
            da situação.</h2>
            <h2>Enquanto tentava fugir a Rainha conseguiu cegar momentaneamente o terrivel Izoton com uma tocha que 
            estava na parede do saguão do castelo, mas ao fazer isso, acabou caindo e se machucando...
            O que você fará a seguir?</h2>
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