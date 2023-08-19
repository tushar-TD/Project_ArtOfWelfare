import React from 'react'
import { Link, Router, Routes, Route, link } from 'react-router-dom';
import Reg_Customer from './Reg_Customer';
import Login from './Login';


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ART FOR WELFARE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  REGISTRATION
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><Link class="dropdown-item" to="Reg_Customer">Customer</Link></li>
                  <li><Link class="dropdown-item" to="#">Artist action</Link></li>
                  <li><Link class="dropdown-item" to="#">NGO</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="Login">LOGIN</Link>
              </li>
            </ul>

          </div>
        </div >
      </nav >
      <Routes>
        <Route path="Reg_Customer" element={<Reg_Customer />} />
        <Route path="Login" element={<Login />} />


      </Routes>

    </div >


  )
}

export default Navbar
