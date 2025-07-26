import './App.css'
import Batman from './components/Body/Batman'
import DaisyNav from './components/DasiyNav/DaisyNav'
import NavBar from './components/Navbar/NavBar'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <div className='flex flex-col items-center my-36'>
        <Batman></Batman>
      </div>

    </>
  )
}

export default App
