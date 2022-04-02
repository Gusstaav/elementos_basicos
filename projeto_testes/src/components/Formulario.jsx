import { useState } from 'react'

import '../styles/formulario.css'

export default function Formulario(){

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [mensagem, setMensagem] = useState("")

    function concatenar(){
        setMensagem("olá, " + nome + " " + sobrenome)
    }


    return(
        <div className="formulario">
            <h1>States em Componentes Controlados</h1>

            <input 
            className="campo"
            type="text"
            placeholder="Digite seu nome:"
            onChange={ e => setNome( e.target.value )}
            />

            <input 
            className="campo"
            type="text"
            placeholder="Digite seu sobrenome:"
            onChange={ e => setSobrenome( e.target.value )}
            />

            <button className="botaoo" 
            onClick= { concatenar }
            > Ok
            </button>
            <p className="mensagem">{mensagem}</p>
        </div>
    );
}