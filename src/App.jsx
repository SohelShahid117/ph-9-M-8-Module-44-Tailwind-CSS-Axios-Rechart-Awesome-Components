
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/Navbar/Navbar';
import PriceOptions from './Components/PriceOptions/PriceOptions';
import LineChart from './Components/LineChart/LineChart';


function App() {


  return (
    <>
      <Navbar></Navbar>

    {/* <DaisyNav></DaisyNav> */}
   
      <h1 className='text-3xl bg-red-600'>Vite + React</h1>

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>

    </>
  )
}

export default App
