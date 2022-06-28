import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow">
    <div className="container-fluid ">
      <a className="navbar-brand  " href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse row " id="navbarNav">
        <div className="navbar-nav col-lg-4">
            <a className="nav-link  " aria-current="page" href="#">Home</a>
            
        </div>
       
      </div>
      
    </div>
  </nav>
    </div>
  )
}
