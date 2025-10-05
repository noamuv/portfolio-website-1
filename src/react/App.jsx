import '../css/App.css'
import ThreeCanvas from './ThreeCanvas'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <ThreeCanvas />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>  
  )
}

export default App
