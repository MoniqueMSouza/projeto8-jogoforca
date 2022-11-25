function Jogo() {

function iniciarJogo(){
    alert('linkou!')
}

    return (
        <div class="pagInteira">
            <div class="tela">
                <div class="ladoEsquerdo">
                    <img class="forca" src="assets/forca0.png" />
                </div>
                <div class="ladoDireito">
                    <div class="botao">
                        <button onClick={iniciarJogo}class="escolherPalavra">Escolher Palavra</button>
                    </div>
                    <div class="chute">
                        <span> _ _ _ _ _ _ _ _ _ _ _ _</span>
                    </div>
                </div>
            </div></div>
    )
}

export default Jogo;