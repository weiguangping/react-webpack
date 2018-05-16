import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/nav.css'
const NavBar = () => (
  <div>
    <div>
      <NavLink exact to='/' className='blue'>index</NavLink> |&nbsp;
        <NavLink to='/gpb' activeClassName='active'>gpb</NavLink> |&nbsp;
        <NavLink to='/gpc/aaa'>gpc</NavLink>
      <NavLink to='/react' activeClassName='active'>404</NavLink>
      <NavLink to='/redirect' activeClassName='active'>Redirect</NavLink>
    </div>
  </div>
)
export default NavBar
