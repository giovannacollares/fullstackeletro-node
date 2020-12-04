import { Switch, Route } from 'react-router-dom';

import Produtos from './Pages/produtos';
import Contato from './Pages/contato';
import Lojas from './Pages/lojas';
import Index from './Pages/index';

function Rotes() {
        return (
        <Switch>
            <Route exact path='/index' component={Index} />
            <Route exact path='/Produtos' component={Produtos} />
            <Route exact path="/Contato" component={Contato} />
            <Route exact path="/Lojas" component={Lojas} />
        </Switch>
        );
}

export default Rotes;