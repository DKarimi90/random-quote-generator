import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <div className='nav'>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/about">About</NavLink>
        <NavLink to = "/quotes">Quotes</NavLink>
    </div>
  )
}

export default NavBar