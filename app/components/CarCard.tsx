'use client'

import Image from 'next/image'
import { HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface CarCardProps {
  name: string
  type: string
  image: string
  specs: {
    capacity: string
    transmission: string
    fuel: string
  }
  price: number
}

export function CarCard({ name, type, image, specs, price }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <HeartIcon className={`h-6 w-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
        </button>
      </div>

      {/* Image Section */}
      <div className="relative h-24 w-full mb-4">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-contain rounded-md"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
      </div>

      {/* Specifications */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <UserGroupIcon className="h-4 w-4 mr-1" />
          {specs.capacity}
        </div>
        <div className="text-sm text-gray-500">{specs.transmission}</div>
        <div className="text-sm text-gray-500">{specs.fuel}</div>
      </div>

      {/* Price and Action */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">/day</span>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Rent Now
        </button>
      </div>
    </div>
  )
}
