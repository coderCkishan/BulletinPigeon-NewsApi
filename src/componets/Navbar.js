import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
 

  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="#"><span className='text-danger'>Bulletin</span><span className='text-primary'>Pigeon</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <Link className="nav-link active " id="home-tab" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="business" data-toggle="tab" to="/business" role="tab" aria-controls="business" aria-selected="false">Business</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="entertainment" data-toggle="tab" to="/entertainment" role="tab" aria-controls="entertainment" aria-selected="false">Entertainmnet</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="health" data-toggle="tab" to="/health" role="tab" aria-controls="health" aria-selected="false">Health</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="sports" data-toggle="tab" to="/sports" role="tab" aria-controls="sports" aria-selected="false">Sports</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="science" data-toggle="tab" to="/science" role="tab" aria-controls="science" aria-selected="false">Science</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="technology" data-toggle="tab" to="/technology" role="tab" aria-controls="technology" aria-selected="false">Technology</Link>
  </li>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle text-danger" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Country</a>
    <div className="dropdown-menu">
      <Link className="dropdown-item text-danger" to="/in">India</Link>
      <Link className="dropdown-item text-danger" to="/us">United States</Link>
      <Link className="dropdown-item text-danger" to="/ru">Russia</Link>
      <Link className="dropdown-item text-danger" to="/ca">Canada</Link>
      <Link className="dropdown-item text-danger" to="/gb">United Kingdom</Link>
    </div>
  </li>

</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane primary show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div className="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business"></div>
  <div className="tab-pane fade" id="entertainment" role="tabpanel" aria-labelledby="entertainment"></div>
  <div className="tab-pane fade" id="health" role="tabpanel" aria-labelledby="health"></div>
  <div className="tab-pane fade" id="sports" role="tabpanel" aria-labelledby="sports"></div>
  <div className="tab-pane fade" id="science" role="tabpanel" aria-labelledby="science"></div>
  <div className="tab-pane fade" id="technology" role="tabpanel" aria-labelledby="technology"></div>
  
</div>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
