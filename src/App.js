import './App.css';
import MiniMenu from './Menu/MiniMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import BeautysetDetail from './Beautyset/BeautysetDetail'
import ProductDetail from './Product/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <div id="App" className="App">
        <MiniMenu/>
        <div id="container">
          <Switch>
            <Route exact={true} path="/">
              <Home/>
            </Route>
            <Route path="/beautyset/:id">
              <BeautysetDetail/>
            </Route>
            <Route path="/product/:id">
              <ProductDetail/>
            </Route>
          </Switch>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
