import PropTypes from 'prop-types'
import SinglePrice from '../SinglePrice/SinglePrice'

const PriceOptions = () => {

    const priceOptions = [
        {
         "id": "gym456",
         "name": "FitZone",
         "location": "456 Oak Avenue, Townsville, USA",
         "price": 40,
         "features": ["Basic Membership","per month"]
       },
        {
         "id": "gym450",
         "name": "SmartZone",
         "location": "406 Oak Avenue, Townsville, Australia",
         "price": 140,
         "features": ["primary Membership","per day"]
       },
        {
         "id": "gym406",
         "name": "FitArea",
         "location": "46 Oak Avenue, Townsville, CANADA",
         "price": 400,
         "features": ["Basic Membership","per WEEK","per day"]
       },
        {
         "id": "gym56",
         "name": "FitlIFE",
         "location": "356 Oak Avenue, Townsville, fINLAND",
         "price": 240,
         "features": ["Basic Membership","per Year","primary Membership"]
       },
        {
         "id": "gym457",
         "name": "FitZie",
         "location": "456 Oak Avenue, Townsville, USA",
         "price": 160,
         "features": ["life Membership","per year"
         ]
       }
   ]
     

  return (
    <div className='m-10'>
        <h2 className="text-5xl mb-5">Best Prices in the town</h2>
        <div className='grid md:grid-cols-3 gap-5'>
          {
            priceOptions.map((option) => <SinglePrice key={option.id} option = {option}></SinglePrice>)
          }
        </div>
       
    </div>
  )
}

// PriceOptions.propTypes = {
//     PriceOptions.PropTypes.object
// }

export default PriceOptions