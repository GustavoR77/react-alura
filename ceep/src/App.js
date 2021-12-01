import React from 'react';
import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas />
    </>
  );
}
//react -> lib
//React -> Ecossistema
export default App;