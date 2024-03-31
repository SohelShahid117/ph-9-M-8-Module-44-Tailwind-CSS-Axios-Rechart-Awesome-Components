import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/Navbar/Navbar';
import PriceOptions from './Components/PriceOptions/PriceOptions';
import LineChart from './Components/LineChart/LineChart';
import Phones from './Components/Phones/Phones';


function App() {


  return (
    <>
      <Navbar></Navbar>

    {/* <DaisyNav></DaisyNav> */}
   
      <h1 className='text-3xl bg-red-600'>Vite + React</h1>

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
      <Phones></Phones>

    </>
  )
}

export default App

//44-8 Explore React Awesome Components
//https://github.com/brillout/awesome-react-components
//https://mhnpd.github.io/react-loader-spinner/----------spinner or loader
//https://github.com/brillout/awesome-react-components?tab=readme-ov-file#loader
