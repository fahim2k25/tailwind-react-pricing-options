import { Suspense } from 'react'
import './App.css'
import Batman from './components/Body/Batman'
import PricingOptions from './components/Body/PricingOptions/PricingOptions'
import DaisyNav from './components/DasiyNav/DaisyNav'
import NavBar from './components/Navbar/NavBar'
import axios from 'axios'
import BoxofficeChart from './components/boxOfficeCHart/BoxofficeChart'

const pricingPromise = fetch('/payment.json').then(res => res.json());
const boxOfficePromise = axios.get('/boxoffice.json');


function App() {
  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <div className='flex flex-col items-center my-36'>
        <Batman></Batman>
      </div>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <BoxofficeChart boxOfficePromise={boxOfficePromise}></BoxofficeChart>
      </Suspense>

    </>
  )
}

export default App
