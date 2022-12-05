import Jogo from "./components/Jogo"
import Chute from "./components/Chute"
import Letras from "./components/Letras"
import { useState } from "react";
import alfabeto from "./alfabeto";

export default function App() {
  const [desabilitarInput, setDesabilitarInput] = useState(true)
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto)

  return (
    <div className="App">
      <Jogo/>
      <Letras letrasUsadas={letrasUsadas}/>
      <Chute desabilitarInput={desabilitarInput}/>
    </div>
  );
}
