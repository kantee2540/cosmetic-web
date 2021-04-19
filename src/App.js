import './App.css';
import MiniMenu from './Menu/MiniMenu'
import BeautysetDetail from './Beautyset/BeautysetDetail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home/Home'

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
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
