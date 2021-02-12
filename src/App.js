import Menu from './Components/Menu';


import loading from './loading.gif';

import { BrowserRouter} from 'react-router-dom';
import {lazy, Suspense} from 'react';

const Rotes = lazy(() => import('./Rotes'));
const Rodape = lazy(() => import('./Components/Rodape'));

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
  
          <Menu />

      </header>
      <main>
        <section>
          <Suspense fallback={<div style={{textAlign:'center', backgroundColor:'#fff'}}><img src={loading} width="230px" alt="carregando..." /></div>}>
          
          <Rotes />

        </Suspense>
        </section>
      </main>
      <footer>
        <Suspense fallback={<div style={{textAlign:'center', backgroundColor:'#FFCE0B'}}><img src={loading} width="230px" alt="carregando..." /></div>}>
          
        <Rodape />

        </Suspense>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
