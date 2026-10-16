import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Login from './pages/auth/Login'

export default function App(){
  return (
    <div className="min-h-screen bg-cream text-ink">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-forest">FoodLoop</Link>
          <div className="space-x-4">
            <Link to="/explore" className="text-sm text-ink">Explore</Link>
            <Link to="/community" className="text-sm text-ink">Community</Link>
            <Link to="/login" className="text-sm text-forest">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/community" element={<div className='py-20 text-center'>Community feed (coming)</div>} />
        </Routes>
      </main>

      <footer className="bg-white mt-16 py-6">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600">© FoodLoop demo</div>
      </footer>
    </div>
  )
}
