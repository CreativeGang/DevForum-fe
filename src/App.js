import './App.css';
import React, { Fragment, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Article from './common/layout/Article';
import Post from './pages/PostPage/PostPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './common/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import PublicPost from './pages/PublicPost';
import UsersPage from './pages/Users/UsersPage';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section>
            <Alert />
            <Switch>

              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exaxt path="/register" component={Register} />
              <Route path="/article/:id" component={Article}></Route>
              {/* <Route path="/post" component={Post}></Route> */}
              <Route path="/post" component={PublicPost}></Route>
              <Route path="/create_post" component={Post}></Route>
              <Route path="/UsersPage" component={UsersPage}></Route>

            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
