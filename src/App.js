import { useState } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';

function App() {

  const [lista, setLista] = useState([true, true, true, true, true, true, true, true, true])
  function katt(data){
    const slista = [...lista];
    slista[data] = !slista[data];
    setLista([...slista]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Light On, Light Off</h2>
      </header>
      <article>
          <Jatekter LISTA = {lista} katt = {katt} />
      </article>
    </div>
  );
}

export default App;
