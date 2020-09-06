import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import {Detail} from './pages/Detail';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component{
 

  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:movieid" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }

}

export default App;
