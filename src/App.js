import Jogo from "./components/Jogo"
import Chute from "./components/Chute"
import Letras from "./components/Letras"
import { useState } from "react";
import alfabeto from "./alfabeto";
import palavas from "./palavras"
import palavras from "./palavras";

export default function App() {
  const [desabilitarInput, setDesabilitarInput] = useState(true)
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto)
  const [erros, setErros] = useState(0)
  const [palavraJogo, setPalavraJogo] = useState([])
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [corPalavra, setCorPalavra] = useState("preto")

  function iniciarJogo(){
    sortearPalavra()
    setDesabilitarInput(false);
    setLetrasUsadas([])
  }

  function sortearPalavra(){
    const i = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[i]
    const palavraArray = palavra.split("")
    setPalavraEscolhida(palavraArray)
    let underline = []
    palavraArray.forEach(() => underline.push(" _"))
    setPalavraJogo(underline)
  }

  function clicarLetra(letraClicada){
    setLetrasUsadas([...letrasUsadas, letraClicada])
    console.log(palavraEscolhida)
    if(palavraEscolhida.includes(letraClicada)){
      acertouLetra(letraClicada)
    }
    else{
      errouLetra(letraClicada)
    }
  }

  function acertouLetra(letraClicada){
    const novaPalavra = [...palavraJogo]
    
    palavraEscolhida.forEach((letraEscolhida, i) => {
      if(palavraEscolhida[i] === letraClicada){
        novaPalavra[i] = letraClicada
      }
    })
    setPalavraJogo(novaPalavra)

    if(!novaPalavra.includes(" _")){
      setCorPalavra("verde");
      finalizar()
    }
  }

  function errouLetra(){
    const counterErros = erros + 1;
    setErros(counterErros)
    if(counterErros === 6){
      setCorPalavra("vermelho");
      finalizar()
    }
  }

  function finalizar(){
    setLetrasUsadas(alfabeto)
    setDesabilitarInput(true)
  }

  return (
    <div className="App">
      <Jogo iniciarJogo={iniciarJogo} erros={erros} palavraJogo={palavraJogo} corPalavra={corPalavra}/>
      <Letras letrasUsadas={letrasUsadas} clicarLetra={clicarLetra}/>
      <Chute desabilitarInput={desabilitarInput}/>
    </div>
  );
}
