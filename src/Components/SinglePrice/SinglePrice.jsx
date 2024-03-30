import PropTypes from 'prop-types'

const SinglePrice = ({option}) => {
    // console.log(option)
    const {id,name,price,features} = option;
    console.log(features)
  return (
    <div>
            <h2>
                <span className = "text-5xl">price : {price}</span>
                <span className = "text-2xl">/{name}</span>
            </h2>
    </div>
  )
}

// SinglePrice.propTypes = {
//     option.PropTypes.object

// }

export default SinglePrice