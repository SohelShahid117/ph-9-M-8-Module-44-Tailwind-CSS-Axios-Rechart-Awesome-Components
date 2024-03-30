import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineCheck } from "react-icons/ai";

const Features = ({featureee}) =>{
    // console.log(featureee)
  return (
    <div>
        
        <h2 className='flex items-center justify-start'> <AiOutlineCheck className='text-green-500 mr-4' /> {featureee}</h2>
      
    </div>
  )
}

Features.propTypes = {

}


export default Features

