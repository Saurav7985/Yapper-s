import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App