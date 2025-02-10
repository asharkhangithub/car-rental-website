"use client"

import { useState, useEffect, useCallback } from "react"

import ProductCard from "./ProductCard"
// import SearchBar from "./SearchBar"
import CategoryComponent from "./CategoryComponent"
import { client } from "@/sanity/lib/sanity"
import SearchBar from "./SearchBar"


async function getCars(): Promise<Car[]> {
  const query = `*[_type == "car"] {
    _id,
    name,
    brand,
    type,
    pricePerDay,
    image
  }`
  try {
    console.log("Fetching cars from Sanity...")
    const cars = await client.fetch(query)
    console.log("Fetched cars:", cars)
    return cars
  } catch (error) {
    console.error("Error fetching cars:", error)
    throw error
  }
}

export default function ProductListing() {
  const [cars, setCars] = useState<Car[]>([])
  const [filteredCars, setFilteredCars] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const fetchCars = useCallback(async () => {
    try {
      setIsLoading(true)
      const fetchedCars = await getCars()
      setCars(fetchedCars)
      setFilteredCars(fetchedCars)
      setError(null)
    } catch (err) {
      console.error("Error in fetchCars:", err)
      setError("Failed to fetch cars. Please check your Sanity configuration and try again.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCars()
  }, [fetchCars])

  const handleSearch = useCallback(
    (searchTerm: string) => {
      console.log("Search term:", searchTerm)
      const filtered = cars.filter(
        (car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.type.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      console.log("Filtered cars:", filtered)
      setFilteredCars(filtered)
    },
    [cars],
  )

  const handleCategoryChange = useCallback(
    (category: string) => {
      setActiveCategory(category)
      if (category === "All") {
        setFilteredCars(cars)
      } else {
        const filtered = cars.filter((car) => car.type.toLowerCase() === category.toLowerCase())
        setFilteredCars(filtered)
      }
    },
    [cars],
  )

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CategoryComponent onCategoryChange={handleCategoryChange} />
      {filteredCars.length === 0 ? (
        <div className="text-center py-8">
          No cars available matching your search or selected category. Please try a different term or category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {filteredCars.map((car) => (
            <ProductCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  )
}




export interface Car {
  _id: string
  name: string
  brand: string
  type: string
  pricePerDay: number
  originalPrice?: number
  image: any // Sanity image type
  fuelCapacity?: string
  transmission?: string
  seatingCapacity?: string
}
