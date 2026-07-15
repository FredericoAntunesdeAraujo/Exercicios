const pontuacaoMudar = document.querySelector("#placar");
const pontos = 75;

if ( pontos <= 49 ){
    pontuacaoMudar.style.color = 'red';
    pontuacaoMudar.style.backgroundColor = '#fde8e8';
} else if ( pontos <= 74 ){
    pontuacaoMudar.style.color = 'orange';
    pontuacaoMudar.style.backgroundColor = '#fef3e2';
} else if (pontos <= 100) {
    pontuacaoMudar.style.color = 'green';
    pontuacaoMudar.style.backgroundColor = '#fef3e2'
}