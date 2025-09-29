import './App.css'
import Navbar from './Components/Navbar'
import Features from './Components/Features'
import Hero from './Components/Hero'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <div className='font-sans bg-white text-gray-900'>
        <Navbar />
        <Features />
        <Hero />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
