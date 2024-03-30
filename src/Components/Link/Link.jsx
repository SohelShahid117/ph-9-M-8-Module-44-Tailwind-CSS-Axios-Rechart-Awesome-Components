import React from 'react'
import PropTypes from 'prop-types'

const Link = ({routee}) => {
  return (
    <div>
      
      <li className='mr-10'>
          <a href={routee.path}>{routee.name}</a>
      </li>

    </div>
  )
}

Link.propTypes = {
  

}

export default Link
