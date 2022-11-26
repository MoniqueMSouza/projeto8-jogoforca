function Letras({habilitar}){
    let contador = 0
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   
   
    function contarErros(){
    contador = contador + 1
    
   }
    return(
        <div className="pagInteira">
        <div className='teclado'>
{alfabeto.map((letra) => <button className={(habilitar) ? "teclaDesativada" : "teclaAtivada"} disabled={habilitar} onClick={contarErros} >{letra}</button>)}
        </div>
        </div>
    )
}

export default Letras;