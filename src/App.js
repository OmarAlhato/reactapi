import React, { Component } from 'react'
import { Route, Router, Switch, BrowserRouter,Link, NavLink } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import NotFound from './NotFound'
import './App.css'
export class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src="./imgslider/unnamed-file.png" width="70px" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
    
      <li className="nav-item active">
        <Link className="nav-link" to="/About">About <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


      {/* <!-- ? Preloader Start --> */}

<Switch>
  
  <Route path="/" component={Home} exact/>
  <Route path="/About" component={About} exact/>
  <Route component={NotFound} exact/> 

</Switch>
      </div>
    )
  }
}

export default App
