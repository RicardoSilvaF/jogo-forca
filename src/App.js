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

  return (
    <div className="App">
      <Jogo iniciarJogo={iniciarJogo} erros={erros} palavraJogo={palavraJogo}/>
      <Letras letrasUsadas={letrasUsadas}/>
      <Chute desabilitarInput={desabilitarInput}/>
    </div>
  );
}
