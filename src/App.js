import './App.css';
import { useState } from 'react';
import KeyComponent from './KeyComponent';
function App() {
  const [push, setPush] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>タイピングゲーム</h1>
        <p>Enterキーでスタート</p>
        <div id="game"></div>
        <div class="keyboard">
          <KeyComponent keyValue="Q" onClick={() => setPush(true)} />
          <KeyComponent keyValue="W" onClick={() => setPush(true)} />
          <KeyComponent keyValue="E" onClick={() => setPush(true)} />
          <KeyComponent keyValue="R" onClick={() => setPush(true)} />
          <KeyComponent keyValue="T" onClick={() => setPush(true)} />
          <KeyComponent keyValue="Y" onClick={() => setPush(true)} />
          <KeyComponent keyValue="U" onClick={() => setPush(true)} />
          <KeyComponent keyValue="I" onClick={() => setPush(true)} />
          <KeyComponent keyValue="O" onClick={() => setPush(true)} />
          <KeyComponent keyValue="P" onClick={() => setPush(true)} /><br></br>
          <KeyComponent keyValue="A" onClick={() => setPush(true)} />
          <KeyComponent keyValue="S" onClick={() => setPush(true)} />
          <KeyComponent keyValue="D" onClick={() => setPush(true)} />
          <KeyComponent keyValue="F" onClick={() => setPush(true)} />
          <KeyComponent keyValue="G" onClick={() => setPush(true)} />
          <KeyComponent keyValue="H" onClick={() => setPush(true)} />
          <KeyComponent keyValue="J" onClick={() => setPush(true)} />
          <KeyComponent keyValue="K" onClick={() => setPush(true)} />
          <KeyComponent keyValue="L" onClick={() => setPush(true)} />
          <KeyComponent keyValue=";" onClick={() => setPush(true)} /><br></br>
          <KeyComponent keyValue="Z" onClick={() => setPush(true)} />
          <KeyComponent keyValue="X" onClick={() => setPush(true)} />
          <KeyComponent keyValue="C" onClick={() => setPush(true)} />
          <KeyComponent keyValue="V" onClick={() => setPush(true)} />
          <KeyComponent keyValue="B" onClick={() => setPush(true)} />
          <KeyComponent keyValue="N" onClick={() => setPush(true)} />
          <KeyComponent keyValue="M" onClick={() => setPush(true)} />
        </div>
      </header>
    </div>
  );
}

export default App;
