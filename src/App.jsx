import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
