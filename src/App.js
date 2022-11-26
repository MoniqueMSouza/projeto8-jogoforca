import React from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
//import palavras from "./palavras"

function App() {
  const [habilitar, setHabilitar] = React.useState(true)

  return (
    <>
    <Jogo
    setHabilitar={setHabilitar}
    ></Jogo>
    <Letras
    setHabilitar={setHabilitar}
    habilitar={habilitar}
    ></Letras>
    <Chute
    habilitar={habilitar}
    ></Chute> 
    </>
  )
}

export default App;
