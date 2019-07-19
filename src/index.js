import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
  render(){
    return(
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)