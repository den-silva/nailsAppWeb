import logo from './logo.svg';
import './App.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Modal from './components/modal/Modal';


function App() {
  return (
    <>
      <Header/>
      <Body/>
      <Modal/>
    </>


  );
}

export default App;






    /* COMPONENTE PADRÃO DO REACT
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/