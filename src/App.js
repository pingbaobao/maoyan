import React, { Component } from 'react';
import {Redirect,Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import Moives from "@pages/hotmoives/Moives"
import Cinemas from "@pages/cinemas/Cinemas"
import Mine from "@pages/mine/Mine"
import Search from "@pages/search/Search"
import NotFound from '@pages/notfound'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <>
            <Switch>
              <Route path="/" exact component={Moives}></Route>
              <Route path="/moives/hot" exact component={Moives}></Route>
              <Route path="/cinemas" exact component={Cinemas}></Route>
              <Route path="/search" exact component={Search}></Route>
              <Route path="/mine" exact component={Mine}></Route>
              <Route path="/notfound" component={NotFound}></Route>
              <Redirect to ={{pathname:'/notfound'}}/>>
            </Switch>
            </>
          </Router>
      </div>
    );
  }
}

export default App;
