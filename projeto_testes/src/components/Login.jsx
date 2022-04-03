import { useState } from 'react';
import React from 'react';
import '../styles/login.css';

export default function Login(){
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [avisoSenha, setAvisoSenha] = useState("")

    function concatenar(){
      if(usuario + senha == 'usuario' + '123456')(
        setMensagem("bem vindo " + usuario)
        )
        else(
          setMensagem("nome de usuario ou senha incorretos")
        );
    }

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

<p className='aviso'>{mensagem}</p> 

        <button className="avancar" 
        onClick={ concatenar }>
          Entrar
        </button>
     </div>
    );
}