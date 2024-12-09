'use client'

import { MapPinIcon, CalendarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function Searchbar() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-blue-600" />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-blue-600" />
          <input
            type="date"
            className="w-full p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-blue-600" />
          <input
            type="time"
            className="w-full p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>
    </div>
  )
}

