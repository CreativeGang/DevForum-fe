import './App.css';
import React, { Fragment } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Article from './pages/Article'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Fragment>
        <section>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exaxt path="/register" component={Register} />
            <Route path="/article/:id"  component={Article}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
