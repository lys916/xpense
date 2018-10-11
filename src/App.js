import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NewTrans from './NewTrans';
import UserList from './UserList';
import Settings from './Settings';
import MyTrans from './MyTrans';
import Login from './Login';
import Register from './Register';
import RequireAuth from './HOC/requireAuth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={RequireAuth(Home)}  />
            <Route path='/my-trans' component={RequireAuth(MyTrans)} />
            <Route path='/user-list' component={RequireAuth(UserList)} />
            <Route path='/settings' component={RequireAuth(Settings)} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            {/* <Route path='/items/:id' component={ItemView}  /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
