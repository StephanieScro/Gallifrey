import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'tachyons';
import './index.css'
import './stylus/main.css'
ReactDOM.render(<App />, document.getElementById('root'));
const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        {/* <Route path="/about" component={About} />
        <Route path="/avaliable" component={Avaliable} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/News" component={News} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
