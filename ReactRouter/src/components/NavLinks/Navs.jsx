import React from 'react'
import { NavLink } from 'react-router-dom'
function Navs() {
  return (
    <div>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/contact" >Contact Us</NavLink>
      <NavLink to="/github" >Github</NavLink>
    </div>
  )
}

export default Navs