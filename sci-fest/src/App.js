import './App.scss';
import {Home,Sec1} from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch >
          <Route path="/sec1">
            <Sec1/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>   
      </Router>
    </div>
  );
}

export default App;
