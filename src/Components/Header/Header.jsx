import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
        <header className='main-head'>
            <nav>
                <div className="logo">
                    <h1>Bharat <span>Control India</span></h1>
                </div>
                <div className="nav-links">
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About</Link></li>
                        <li><Link to="/our-products">Our Products</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="toogle-menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header