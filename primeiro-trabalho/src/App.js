
import './App.css';
import Button from './Componentes/button.jsx'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>oi, não ta dando</h1>
      <Button cor="blue" user="Gigi"/>
      </header>
      <div>
        <p>conteúdo</p>
      </div>
      <footer className="App-footer">
        <p>Pagina desenvolvida e projetada por Giovanna Andrade</p>
      </footer>
    </div>
  );
}

export default App;
