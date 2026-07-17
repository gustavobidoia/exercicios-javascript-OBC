var botaoIniciar = document.getElementById('iniciar')
var jogador1 = document.getElementById('jogador1')
var jogador2 = document.getElementById('jogador2')
var turno = document.getElementById('turno')
var casas = document.querySelectorAll('#tabuleiro p')
var vencedor = document.querySelector('#vencedor p')

botaoIniciar.addEventListener('click', function(ev) {
    ev.preventDefault()
    botaoIniciar.disabled = true
    document.getElementById('reiniciar').addEventListener('click', () => {location.reload()})

    let turnoJogador = 'jogador1'
    let jogoGanho = false
    let jogada = 0
    turno.innerText = 'Vez do jogador: ' + jogador1.value

    casas.forEach(casa => {
        casa.addEventListener('click', function (ev) {
            if (ev.target.textContent !== 'X' && ev.target.textContent !== 'O' && !jogoGanho) {
                if (turnoJogador === 'jogador1') {
                    ev.target.innerText = 'X'
                    turnoJogador = 'jogador2'
                    turno.innerText = 'Vez do jogador: ' + jogador2.value
                } else {
                    ev.target.innerText = 'O'
                    turnoJogador = 'jogador1'
                    turno.innerText = 'Vez do jogador: ' + jogador1.value
                }

                jogada++
            }

            let combinacoes = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
            let casasAtualizadas = ['casa 0']
            let atualizaTabuleiro = document.querySelectorAll('#tabuleiro p')
            atualizaTabuleiro.forEach(casa => {casasAtualizadas.push(casa.textContent)})

            combinacoes.forEach(combinacao => {
                if(casasAtualizadas[combinacao[0]] === 'X' && casasAtualizadas[combinacao[1]] === 'X' && casasAtualizadas[combinacao[2]] === 'X') {
                    casas[combinacao[0] - 1].style.backgroundColor = 'green'
                    casas[combinacao[1] - 1].style.backgroundColor = 'green'
                    casas[combinacao[2] - 1].style.backgroundColor = 'green'
                    jogoGanho = true
                    vencedor.innerText = jogador1.value + ' venceu o jogo!'

                } else if(casasAtualizadas[combinacao[0]] === 'O' && casasAtualizadas[combinacao[1]] === 'O' && casasAtualizadas[combinacao[2]] === 'O') {
                    casas[combinacao[0] - 1].style.backgroundColor = 'green'
                    casas[combinacao[1] - 1].style.backgroundColor = 'green'
                    casas[combinacao[2] - 1].style.backgroundColor = 'green'
                    jogoGanho = true
                    vencedor.innerText = jogador2.value + ' venceu o jogo!'
                } else if (jogada === 9) {
                    vencedor.innerText = 'O jogo empatou!'
                }
            })            

        })
    })
})