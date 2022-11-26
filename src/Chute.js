import React from "react";
function Chute({habilitar}) {
  
    return (
        <div className="pagInteira">
            <div className="base">
                <span className="jaSeiApalavra"> Já sei a palavra!</span>
                <input className="input"  disabled={habilitar}></input>
                <button className="chutar">Chutar</button>
            </div>

        </div>
    )
}

export default Chute;