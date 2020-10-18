import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
//import Sidebar from './components/MySidebar'


import TechPage from './pages/TechPage'
import LifePage from './pages/LifePage'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ display: "flex" }}>
       <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            <Route exact path="/tech" component={TechPage} />
            <Route exact path="/life" component={LifePage} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Redirect to="/tech" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}


export default App;
