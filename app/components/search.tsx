'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'


interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBarr({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center bg-white shadow-md rounded-lg overflow-hidden my-4">
      <input
        type="text"
        placeholder="Search for cars..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        className="flex-grow px-4 py-2 focus:outline-none"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-600">
        <Search size={24} />
      </button>
    </form>
  )
}