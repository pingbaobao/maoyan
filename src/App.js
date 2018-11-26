import React, { Component } from 'react';
import {Redirect,Switch,Route, BrowserRouter as Router} from 'react-router-dom'

import Moives from "@pages/moives/Moives"
import Cinemas from "@pages/cinemas/Cinemas"
import Login from "@pages/login/Login"
import Search from "@pages/search/Search"
import NotFound from '@pages/notfound'
import HotDetail from '@pages/details/hotdetail/HotDetail'
import ComingDetail from '@pages/details/comingdetail/ComingDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Redirect from="/" exact to="/moives"></Redirect>
              <Route path="/moives" component={Moives}></Route>
              <Route path="/hotdetail" component={HotDetail}></Route>
              <Route path="/comingdetail" component={ComingDetail}></Route>
              <Route path="/cinemas" exact component={Cinemas}></Route>
              <Route path="/search" exact component={Search}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/notfound" component={NotFound}></Route>
              <Redirect to ={{pathname:'/notfound'}}/>>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
