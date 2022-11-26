function Jogo({setHabilitar}) {

function iniciarJogo(){    
    setHabilitar(false) 
}

    return (
        <div className="pagInteira">
            <div className="tela">
                <div className="ladoEsquerdo">
                    <img className="forca" src="assets/forca0.png"/>
                </div>
                <div className="ladoDireito">
                    <div className="botao">
                        <button onClick={iniciarJogo} className="escolherPalavra">Escolher Palavra</button>
                    </div>
                    <div className="chute">
                        <span> _ _ _ _ _ _ _ _ _ _ _ _</span>
                    </div>
                </div>
            </div></div>
    )
}

export default Jogo;