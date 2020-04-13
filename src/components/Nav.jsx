import React from 'react'
import NavItem from './NavItem.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Providers from "../pages/Providers.jsx";

export default function Nav(params) {
  return (
  	<Router>
  	      <div>
  	        <nav id="nav">
  	          <ul>
  	            <li>
  	              <Link to="/" className={params.active=="home" ? "active" : ""}>Home</Link>
  	            </li>
  	            <li>
  	              <Link to="/providers" className={params.active=="providers" ? "active" : ""}>Providers</Link>
  	            </li>
  	            <li>
  	              <Link to="/projects" className={params.active=="projects" ? "active" : ""}>Projects</Link>
  	            </li>
  	          </ul>
  	        </nav>

  	        {/* A <Switch> looks through its children <Route>s and
  	            renders the first one that matches the current URL. */}
  	        <Switch>
  	          <Route path="/">
  	            <About />
  	          </Route>
  	          <Route path="/providers">
  	            <Users />
  	          </Route>
  	          <Route path="/projects">
  	            <Home />
  	          </Route>
  	        </Switch>
  	      </div>
  	    </Router>
  );
}
