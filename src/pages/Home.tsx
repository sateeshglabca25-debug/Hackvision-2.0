import React from 'react'

export default function Home(){
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-forest">Good food. Shared with purpose.</h1>
          <p className="mt-4 text-gray-700">FoodLoop connects people who have surplus food with neighbors and organizations who can use it — quickly, safely, and respectfully.</p>

          <div className="mt-6 flex gap-3">
            <a href="/explore" className="px-4 py-2 bg-leaf text-white rounded shadow">Explore Food</a>
            <a href="/login" className="px-4 py-2 border border-leaf text-leaf rounded">Donate Surplus Food</a>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">Hero image placeholder</div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-ink">Featured donations</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow p-4">Sample donation card</div>
          <div className="bg-white rounded shadow p-4">Sample donation card</div>
          <div className="bg-white rounded shadow p-4">Sample donation card</div>
        </div>
      </section>
    </section>
  )
}
