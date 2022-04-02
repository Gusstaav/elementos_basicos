import "../styles/contador.css"
import { useState } from "react"

export default function Contador(){

     const [numero, setNumero] = useState(0)


        function incremento(){
        setNumero(numero + 1)
        }
    return(
        <div className="contador">
            <h1> Contador </h1>
            <h1>{numero}</h1>
            <button className="botao" onClick={incremento}>Incremento</button>
        </div>
    );
}