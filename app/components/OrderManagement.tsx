"use client"

import { useState, useEffect } from "react"
import { getOrders, type Order } from "@/sanity/lib/sanity"

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([])
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    setIsLoading(true)
    try {
      const fetchedOrders = await getOrders()
      setOrders(fetchedOrders)
    } catch (error) {
      console.error("Error fetching orders:", error)
      setMessage("Failed to fetch orders. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveOrder = async (orderId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/removeOrder?orderId=${orderId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to remove order")
      }

      setMessage("Order removed successfully.")
      await fetchOrders() // Refresh the order list
    } catch (error) {
      console.error("Error removing order:", error)
      setMessage("Failed to remove order. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {message && <p className="mb-4 font-semibold text-blue-600">{message}</p>}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="border p-4 rounded-md">
              <p>
                <strong>Car ID:</strong> {order.car}
              </p>
              <p>
                <strong>Start Date:</strong> {new Date(order.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong> {new Date(order.endDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Customer:</strong> {order.customerName}
              </p>
              <p>
                <strong>Email:</strong> {order.customerEmail}
              </p>
              <button
                onClick={() => order._id && handleRemoveOrder(order._id)}
                className="mt-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                disabled={isLoading}
              >
                {isLoading ? "Removing..." : "Remove Order"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

