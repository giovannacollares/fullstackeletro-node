import Menu from './Components/Menu';
import Rotes from './Rotes.js';
import Rodape from './Components/Rodape';

import { BrowserRouter} from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <Menu />
      </header>
      <main>
        <section>
          <Rotes />
        </section>
      </main>
      <footer>
        <Rodape />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
