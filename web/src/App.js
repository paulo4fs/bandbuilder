import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Form from './pages/Form';
import Landing from './pages/Landing';
import Search from './pages/Search';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}></Route>
      <Route path='/search' component={Search}></Route>
      <Route path='/form' component={Form}></Route>
    </Switch>
  );
}

export default App;
