export default function Chute(props){
    const {desabilitarInput, chute, setChute, chutarPalavra} = props;
    
    return(
        <div className="container-input">
            <span className="ja-sei">Já sei a palavra!</span>
            <input className="input-resposta"
              disabled={desabilitarInput}
              value={chute}
              onChange={e => setChute(e.target.value)}/>
            <button className="chutar" onClick={chutarPalavra}>Chutar</button>
        </div>
    )
}