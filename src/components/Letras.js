import alfabeto from "../alfabeto"

export default function Letras(props){
    const {letrasUsadas} = props;

    return(
        <div className="container-letras">
            {alfabeto.map(letra => (
                <button
                  className="botao-letra"
                  key={letra}
                  disabled = {letrasUsadas.includes(letra)}
                >
                    {letra}
                </button>
                )
            )}
        </div>
    )
}