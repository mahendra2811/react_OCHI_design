
import './App.css'
import About from './components/About';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // imported this from https://scroll.locomotive.ca/docs#/

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>

    </>
  )
}

export default App
