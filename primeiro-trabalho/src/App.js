
import './App.css';
import Button from './Componentes/Button.jsx'
import Cardlogin from './Componentes/Cardlogin'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="buttons">
        <Button cor="Rosa" id="rosa"/>
        <Button cor="Azul" id="azul"/>
        <Button cor="Cinza" id="cinza"/>
      </div> 
      </header>
      <div id="conteudo">
        <Cardlogin/>
      </div>
      <footer className="App-footer">
        <p>Pagina desenvolvida e projetada por Giovanna Andrade</p>
      </footer>
    </div>
  );
}

export default App;
