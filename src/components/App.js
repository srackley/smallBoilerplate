import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

const App = () => (
  <div className="App">
    <Navbar />
    <h1>App Frame</h1>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </main>
  </div>
);

export default App;
