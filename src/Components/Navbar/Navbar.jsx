import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = props => {

  const[open,setOpen] = useState(false)

    const route = [
        {"route_id": 1,"path": "/home","name": "Home"},
        {"route_id": 2,"path": "/about","name": "About"},
        {"route_id": 3,"path": "/products","name": "Products"},
        {"route_id": 4,"path": "/contact","name": "Contact"},
        {"route_id": 5,"path": "/dashboard","name": "Dashboard"}
      ]
      
  return (
    <div>
      <nav className="text-black bg-green-400 p-6">

        <div className="md:hidden text-3xl"  onClick={()=>setOpen(!open)}>
          {
            // open === true ? 'open' : 'close'
            open === true ? <AiOutlineClose/> : <AiOutlineMenu/>
          }  
        </div>
    
        <ul className={`md:flex duration-1000 absolute md:static ${open ? "top-16":'-top-60'} bg-green-400 px-6 shadow-xl `}>
          {
            // route.map((routee)=><li  key={routee.id}><a href={`routee.path`}>{routee.name}</a></li>)
            // route.map((routee)=><li className='mr-5'  key={routee.id}><a href={routee.path}>{routee.name}</a></li>)
            
            route.map(routee=>  <Link key={routee.route_id}  routee={routee}></Link>)
          }
        </ul>
      </nav>
      
    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar
