let JogosAlugados = 0;

function contarExibirJogosAlugados()
{
    console.log(`Total de jogos alugados: ${JogosAlugados}`)
}

function alterarStatus(id)
{
    let jogoClicado = document.getElementById(`game-${id}`); //procura o jogo pelo ID presente no html
    let img = jogoClicado.querySelector('.dashboard__item__img')
    let botao = jogoClicado.querySelector('.dashboard__item__button') //procura um elemento classe '.tantnatna'
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name')

    if(img.classList.contains('dashboard__item__img--rented')) //classList devolve a lista de classes que o elemento tem
    {
        img.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar';
        alert(`o jogo "${nomeJogo.textContent}" foi devolvido`)
        JogosAlugados--
    }
    else 
    {
        img.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
        alert(`o jogo "${nomeJogo.textContent}" foi alugado`)
        JogosAlugados++
    }
    
    contarExibirJogosAlugados();
}

