import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './scenes/Home'
import Navbar from './components/Navbar/index.js'
import About from './scenes/About'
import Projects from './scenes/Projects'

class App extends Component {
  render() {
    return (
      <div className="cover-layer">
        <HashRouter>
          <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
              </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
