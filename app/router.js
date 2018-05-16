import React from 'react'
import ReactDOM from 'react-dom'
import Index from './js/index'
import Guangpingb from './js/guangpingb'
import Guangpingc from './js/guangpingc'
import {BrowserRouter as Router, HashRouter as Router2, Route, Switch, Redirect} from 'react-router-dom'
import Error from './js/error'
ReactDOM.render(
  <Router2>
    <div>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/gpb' component={Guangpingb} />
        <Route path='/gpc/:param' component={Guangpingc} />
        <Redirect from='/redirect' to='/gpc' />
        <Route component={Error} />
      </Switch>
    </div>
  </Router2>,
  document.getElementById('app')
)
