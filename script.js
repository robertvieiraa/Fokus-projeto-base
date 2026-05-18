const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')// ('elemento_a_ser_alterado', 'novo_valor')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})