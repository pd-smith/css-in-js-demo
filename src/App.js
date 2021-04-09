import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages';
import StyledComponents from './pages/styled-components';
import Emotion from './pages/emotion';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/styled-components">
          <StyledComponents />
        </Route>
        <Route path="/emotion">
          <Emotion />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
