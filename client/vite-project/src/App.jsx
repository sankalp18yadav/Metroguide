import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stations from './pages/Stations'
import Map from './pages/Map'
import RegionalPlaces from './pages/RegionalPlaces'
import About from './pages/About'
import Footer from './pages/Footer'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/stations" element={<Stations />} />
              <Route path="/map" element={<Map />} />
              <Route path="/regional-places" element={<RegionalPlaces />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App