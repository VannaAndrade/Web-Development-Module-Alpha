import React, {useState} from 'react'
import './App.css';
import MyButton from './Componentes/MyButton/MyButton.jsx'
import Cardlogin from './Componentes/Cardlogin'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');



  return (
    <div style={{backgroundColor: backgroundColor}} className="App">
      <header className="App-header">
      <div id="buttons">
        <MyButton Click={()=>setBackgroundColor('pink')} colorName="Rosa" id="rosa"/>
        <MyButton Click={()=>setBackgroundColor('blue')} colorName="Azul" id="azul"/>
        <MyButton Click={()=>setBackgroundColor('grey')} colorName="Cinza" id="cinza"/>
      </div>
      </header>
      <div id="conteudo">
        <Cardlogin/>
      </div>
      <footer className="App-footer">
        <p>Página desenvolvida por Giovanna Andrade</p>
      </footer>
    </div>
  );
}

export default App;
