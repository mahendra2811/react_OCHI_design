
import './App.css'
import About from './components/About';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Eyes from './components/Eyes';
import Featured from './components/Featured';

function App() {

  return (
    <>
    <div className="w-full min-h-screen bg-zinc-900 text-white">
    <Navbar />
    <LandingPage />
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>

    </div>
       
    </>
  )
}

export default App
