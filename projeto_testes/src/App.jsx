import "./styles/global.css";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import Calculadora from "./components/Calculadora";
import Validar from "./components/BOLETIM";

export default function App() {
    return (
        <>
        <h1>App</h1>
        <hr />
        {/*<Comp_basico titulo="Aula 01" subtitulo="Revisão de componentes" />*/}
        {/*<Comp_basico titulo="Aula 02" subtitulo="Revisão props" />*/}
        {/*<Comp_basico titulo="Titulo padrão" subtitulo="Subtitulo padrão" />*/}
        <Login />
        <hr />
        <Calculadora />
        <hr />
        <Validar />

        </>
    );
}

