import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <div>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.homeName}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mailto:shikhashrivastava252@gmail.com">{props.contact}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.about}</a>
        </li>
      </ul>
     <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
     </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
// propType set
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  homeName: PropTypes.string
}
// default props set
Navbar.defaultProps = {
  title: 'website',
  homeName: 'Home',
  contact: 'contact Us',
  about: 'about Us'
};