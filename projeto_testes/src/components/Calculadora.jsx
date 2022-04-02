import { useState } from "react";
import "../styles/calculadora.css"



export default function Calculadora(){

const [primeiro, setPrimeiro] = useState(0)
const [segundo, setSegundo] = useState(0)
const [resultado, setResultado] = useState(0)

    function somar(){
        setResultado(  Number(primeiro) + Number(segundo)  )
    }

        

    return(
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input 
            className="campo"
            type="number"
            placeholder="Digite o primeiro numero:"
            onChange={ e => setPrimeiro( Number ( e.target.value ) ) }
            />
            <input 
            className="campo"
            type="number"
            placeholder="Digite o segundo numero:"
            onChange={ e => setSegundo( Number ( e.target.value ) )}
            />

            <button className="botao" 
            onClick= { somar }
            > Somar
            </button>

            <p className="mensagem">{resultado}</p>
        </div>
    );
}
