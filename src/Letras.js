function Letras({habilitar}){
    let contador = 0
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   
   
    function contarErros(letra){
    contador = contador + 1
    console.log(letra.target.name)
   }
    return(
        <div className="pagInteira">
        <div className='teclado'>
{alfabeto.map((letra) => <button id={letra} name={letra} className={(habilitar) ? "teclaDesativada" : "teclaAtivada"} disabled={habilitar} onClick={contarErros}>{letra}</button>)}
        </div>
        </div>
       
    )
    
}

export default Letras;