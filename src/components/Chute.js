export default function Chute(props){
    const {desabilitarInput} = props;
    
    return(
        <div className="container-input">
            <span className="ja-sei">Já sei a palavra!</span>
            <input className="input-resposta" disabled={desabilitarInput}/>
            <button className="chutar">Chutar</button>
        </div>
    )
}