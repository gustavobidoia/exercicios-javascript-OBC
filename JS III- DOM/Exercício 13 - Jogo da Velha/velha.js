var botaoIniciar = document.getElementById('iniciar')
var jogador1 = document.getElementById('jogador1')
var jogador2 = document.getElementById('jogador2')
var turno = document.getElementById('turno')
var casas = document.querySelectorAll('#tabuleiro p')

botaoIniciar.addEventListener('click', function(ev) {
    ev.preventDefault()
    botaoIniciar.disabled = true

    let turnoJogador = 'jogador1'
    turno.innerText = 'Vez do jogador: ' + jogador1.value

    casas.forEach(casa => {
        casa.addEventListener('click', function (ev) {
            if (turnoJogador === 'jogador1') {
                ev.target.innerText = 'X'
                turnoJogador = 'jogador2'
                turno.innerText = 'Vez do jogador: ' + jogador2.value
            } else {
                ev.target.innerText = 'O'
                turnoJogador = 'jogador1'
                turno.innerText = 'Vez do jogador: ' + jogador1.value
            }
        })
    })
})