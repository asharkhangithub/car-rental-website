"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"

const categories = ["All", "Sport", "Sedan", "SUV", "Electric"]

interface CategoryComponentProps {
  onCategoryChange: (category: string) => void
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onCategoryChange(category)
  }

  const handleBackClick = () => {
    setActiveCategory("All")
    onCategoryChange("All")
  }

  return (
    <div className="my-8">
      <div className="flex items-center mb-4">
        {activeCategory !== "All" && (
          <button
            onClick={handleBackClick}
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Go back to all categories"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <h2 className="text-2xl font-semibold">{activeCategory === "All" ? "All Categories" : activeCategory}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryComponent

