import "./styles/global.css";
import Comp_basico from "./components/Comp_basico";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Calculadora from "./components/Calculadora";

export default function App() {
    return (
        <>
        <h1>App</h1>
        <hr />
        {/*<Comp_basico titulo="Aula 01" subtitulo="Revisão de componentes" />*/}
        {/*<Comp_basico titulo="Aula 02" subtitulo="Revisão props" />*/}
        {/*<Comp_basico titulo="Titulo padrão" subtitulo="Subtitulo padrão" />*/}
        
       
        <hr />  
        {/*<Contador />*/}
        <hr />
        <Formulario />
        <hr />
        <Calculadora />
        </>
    );
}

