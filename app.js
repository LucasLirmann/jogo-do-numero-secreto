let listaDeNumerosSorteados = [];
let limiteTentativas = 10
let numeroSecreto =gerarNumeroAleatorio();
let tentativas  = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Bem vindo ao jogo do número secreto !');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
limparCampo();

function verificarChute() { 
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor que o chute.');
        } else {
            exibirTexto('p', 'O número secreto é maior que o chute.');
        }
        exibirTexto('h1', 'Errou!');
    }
} 
function gerarNumeroAleatorio() {
    let numeroEscolhido =parseInt(Math.random() * limiteTentativas + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == limiteTentativas) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
}}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}  