import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';


const App = () => (
  <div className="App">
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
