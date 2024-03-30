import PropTypes from 'prop-types'
import Features from './../Features/Features';


const SinglePrice = ({option}) => {
    // console.log(option)
    const {id,name,price,features} = option;
    // console.log(features)
  return (
    <div className='bg-cyan-900 rounded-lg text-white p-5 text-center flex flex-col'>
            <h2>
                <span className = "text-7xl">{price}</span>
                <span className = "text-3xl">/mon</span>
            </h2>
            <h4 className='text-5xl my-5'>{name}</h4>
            <div className='pl-10 flex-grow'>
              {
                features.map((f,indx)=><Features key={indx} featureee = {f}></Features>)
              }
            </div>
            <button className='pl-6 bg-green-600 w-full py-4 mt-5 font-bold rounded-2xl hover:bg-green-800'>Buy Now</button>
    </div>
  )
}

// SinglePrice.propTypes = {
//     option.PropTypes.object

// }

export default SinglePrice