import { useState } from "react";
import "../styles/boletim.css";

export default function Validar(){
    const [nomeAluno, setNomeAluno] = useState("")
    const [nota, setNota] = useState("")
    const [frequencia, setFrequencia] = useState("")
    const [resultado, setResultado] = useState("")
    

    function aprovar(){
        if(nota >= 6 )(
            setResultado("Olá " + nomeAluno +" aprovado parabéns cria tmj é nois")
        )
        else(
            setResultado("Olá " + nomeAluno +"  reprovado, sinto muito tmj é nois")
        )
        if (frequencia <= 75)(
            setResultado("Olá " + nomeAluno +" reprovado frequencia baixa, sinto muito tmj é nois")
        );
    }

    return(
        <div className="vereficar">
            <h1>Boletim</h1>
            <input 
            className="campo"
            type="text"
            placeholder="Digite o nome do aluno"
            onChange={ e => setNomeAluno( e.target.value )}
            />
            <input 
            className="campo"
            type="number"
            placeholder="Digite a nota do aluno"
            onChange={ e => setNota( e.target.valueAsNumber )}
            />
            <input 
            className="campo"
            type="text"
            placeholder="Informe a frequencia do aluno"
            onChange={ e => setFrequencia( e.target.value )}
            />

            <button className="botao" 
            onClick= { aprovar }
            > Ver resultado
            </button>

            <p className="mensagem">{resultado}</p>
            
        </div>
    );
}