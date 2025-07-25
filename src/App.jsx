import './App.css'
import DaisyNav from './components/DasiyNav/DaisyNav'
import NavBar from './components/Navbar/NavBar'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      {/* batman logo */}
      <div className="avatar">
        <div className="w-24 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
        </div>
      </div>
      <h1 className='mt-3'>I am Batman</h1>
    </>
  )
}

export default App
