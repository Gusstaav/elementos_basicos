import "../styles/comp_basico.css"
export default function Comp_basico(props){
    return(
    <div className="basico">
        <h1>{ props.titulo ?? "Titulo padrão" }</h1>
        <h2>{ props.subtitulo ?? "Subtilo padrão" }</h2>
    </div>
    );
}