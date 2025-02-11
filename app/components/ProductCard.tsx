"use client"


import Image from "next/image"


import Link from "next/link"
import { Car } from "./ProductListing"
import { urlForImage } from "../../sanity/lib/sanity"

interface ProductCardProps {
  car: Car
}

export default function ProductCard({ car }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className= "relative w-full aspect-[3/2] bg-white">
        <Image
          src={urlForImage(car.image).url() || "/placeholder.svg"}
          alt={car.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-2"
          priority
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <p className="text-gray-600">{car.brand}</p>
        <p className="text-gray-500">{car.type}</p>
        <p className="mt-1 text-xl font-bold">${car.pricePerDay}/day</p>
        <Link
          href={`/car/${car._id}`}
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

