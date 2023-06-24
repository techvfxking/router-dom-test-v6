import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <header className="container">
      <section className="logo">
        <NavLink to={'/'}>
          <h1>LOGO</h1>
        </NavLink>
      </section>
      <nav className="navbar">
        <ul className="navbarlist">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/post'}>Post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
