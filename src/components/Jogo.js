import forca0 from "../assets/forca0.png"

export default function Jogo(){
    return(
        <div className="area-geral">
            <img className="imagem-forca" src={forca0} alt="forca"/>
            <button className="botao-escolher-palavra">Escolher palavra</button>
            <h1 className="palavra-secreta">u _ a _ _ _ _</h1>
        </div>
    )
}