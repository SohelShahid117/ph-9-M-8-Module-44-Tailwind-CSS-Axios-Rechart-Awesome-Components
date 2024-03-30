import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link'
// import Link from './../Link/Link';

const Navbar = props => {

    const route = [
        {
          "route_id": 1,
          "path": "/home",
          "name": "Home"
        },
        {
          "route_id": 2,
          "path": "/about",
          "name": "About"
        },
        {
          "route_id": 3,
          "path": "/products",
          "name": "Products"
        },
        {
          "route_id": 4,
          "path": "/contact",
          "name": "Contact"
        },
        {
          "route_id": 5,
          "path": "/dashboard",
          "name": "Dashboard"
        }
      ]
      
  return (
    <div>

{/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */}

<nav>
    <ul className='flex'>
        {
            // route.map((routee)=><li  key={routee.id}><a href={`routee.path`}>{routee.name}</a></li>)
            // route.map((routee)=><li className='mr-5'  key={routee.id}><a href={routee.path}>{routee.name}</a></li>)
            
            route.map(routee=>  <Link key={routee.id}  routee={routee}></Link>)
        }
    </ul>
</nav>
      
    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar
