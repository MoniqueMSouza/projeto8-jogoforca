let palavraEscolhida
let palavraSeparada
let arrayPalavraEscolhida

function Jogo({setHabilitar, palavras}) {    

    function comparador() { 
        return Math.random() - 0.5; 
    }
    
function iniciarJogo(){    
    setHabilitar(false) 
palavranaTela();
}
function palavranaTela(){
    palavraEscolhida = palavras.sort(comparador)[0] 
    console.log(palavraEscolhida)
    palavraSeparada = palavraEscolhida.split("")
    arrayPalavraEscolhida = [...palavraSeparada]
    console.log(palavraSeparada)
    for(let i = 0 ; i < palavraSeparada.length;i++){
        palavraSeparada[i]=" _"
    }
    console.log(palavraSeparada)
    console.log(palavraEscolhida)
    console.log(arrayPalavraEscolhida)
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
                        <span>{palavraSeparada}</span>
                    </div>
                </div>
            </div></div>
    )
}

export default Jogo;