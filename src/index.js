import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ProductsPage from './pages/ProductsPage'
import ContactusPage from './pages/ContactusPage'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import config from './config.json'

import { Provider } from 'react-redux'
import mystore from './redux/MyStore'

const defaultRoute = config.DefaultRoutes;

ReactDOM.render(
  <Provider store={mystore}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/services" component={ServicesPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/contactus" component={ContactusPage} /> */}
        {/* <Route exact path="/services" render={() => (window.location = "https://smarth.ca/alarm-system-1")} /> */}
        <Route path="/services" render={() => <App currentPage={defaultRoute.services} />} />
        <Route path="/projects" render={() => <App currentPage={defaultRoute.projects} />} />
        <Route path="/products" render={() => <App currentPage={defaultRoute.products} />} />
        <Route path="/contactus" render={() => <App currentPage={defaultRoute.contactus} />} />
        {/* <Route component={Notfound} /> */}
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
