import React from 'react'

export default function Explore(){
  return (
    <div>
      <h1 className="text-2xl font-semibold">Explore food</h1>
      <p className="text-gray-600 mt-2">Search and filter available donations (demo data).</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Food card</div>
        <div className="bg-white p-4 rounded shadow">Food card</div>
        <div className="bg-white p-4 rounded shadow">Food card</div>
      </div>
    </div>
  )
}
