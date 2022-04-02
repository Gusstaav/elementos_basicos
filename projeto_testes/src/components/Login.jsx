import { useState } from 'react';
import App from '../App';

import '../styles/login.css';

export default function Login(){
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    

    return(
       <div className="tela_login">
       <h1>Bem vindo</h1>
        
        <input 
        className="campo"
        type="text"
        placeholder="Digite seu nome de usuario"
        onChange={ e => setUsuario( e.target.value )}
        />

        <input 
        className="campo"
        type="text"
        placeholder="Digite sua senha"
        onChange={ e => setSenha( e.target.value )}
        />

        <button className="avancar" 
        onClick={o}>
          Entrar
        </button>
        </div>
    );
}