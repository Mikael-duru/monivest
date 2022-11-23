import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './component/Header';
// import Hero from './pages/Hero';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path='/' exact>
          <Hero />
        </Route> */}
        <Route path='./Login'>
          <Login />
        </Route>
        <Route path='./Register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;