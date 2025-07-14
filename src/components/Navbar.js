import React from 'react'

export default function Navbar() {
  return (
      <div className="navbar">
        <div className="container">
          <ul className='navbar-nav'>
          <img src="./img/logo (1).png" alt="" />
            <li><a href="#!" className="nav-link">iMac</a></li>
            <li><a href="#!" className="nav-link">iPad</a></li>
            <li><a href="#!" className="nav-link">iPhone</a></li>
          </ul>
          <div className="iconcs">
            <img src="./img/SEARCH.png" alt="" />
            <img src="./img/shop.png" alt="" />
          </div>
        </div>
      </div>
    )
}
