import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from './componentes/ItemDetail';
import Item from './componentes/Item';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Item} />
          <Route path="/:id" component={ItemDetail} />
        </Switch>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
