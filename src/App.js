import './App.css';
import React, { Fragment } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Article from './common/layout/Article';
import Post from './pages/PostPage/PostPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicPost from './pages/PublicPost';
const App = () => {
  return (
    <Router>
      <Fragment>
        <section>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/post' component={PublicPost}></Route>
            <Route path='/create_post' component={Post}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
