import './App.css';
import MiniMenu from './Menu/MiniMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home/Home'

function App() {
  return (
    <div id="App" className="App">
      <MiniMenu/>
      <div id="container">
       
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/">
              <Home/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
