import './App.scss';
import {Home,Sec1,Sec2,Sec3,Sec4,Sec5} from './pages';
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
          <Route path="/sec2">
            <Sec2/>
          </Route>
          <Route path="/sec3">
            <Sec3/>
          </Route>
          <Route path="/sec4">
            <Sec4/>
          </Route>
          <Route path="/sec5">
            <Sec5/>
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
