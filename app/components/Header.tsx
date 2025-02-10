"use client"

import Link from "next/link"
import { ShoppingCart, Heart, User, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleBack} className="mr-4 p-2 rounded-full hover:bg-gray-100" aria-label="Go back">
            <ChevronLeft size={24} />
          </button>
          <Link href="/" className="text-2xl font-bold">
            Car Rental
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/orders">Orders</Link>
            </li>
            <li>
              <Link href="/admin/order">Admin Orders</Link>
            </li>
            <li>
              <Link href="/cart">
                <ShoppingCart />
              </Link>
            </li>
            <li>
              <Link href="/wishlist">
                <Heart />
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <User />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

