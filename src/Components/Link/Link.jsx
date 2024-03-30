import PropTypes from 'prop-types'

const Link = ({routee}) => {
  return (
    <div>
      <li className='mr-10 hover:bg-green-500 px-6'>
          <a href={routee.path}>{routee.name}</a>
      </li>
    </div>
  )
}

Link.propTypes = {
  route: PropTypes.object,
}

export default Link
