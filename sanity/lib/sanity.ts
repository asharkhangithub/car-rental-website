import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03"
const token = process.env.SANITY_API_TOKEN

if (!projectId) {
  throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not set in environment variables")
}

if (!dataset) {
  throw new Error("NEXT_PUBLIC_SANITY_DATASET is not set in environment variables")
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: token || undefined,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source)
}

export interface Order {
  _id?: string
  car: string
  startDate: string
  endDate: string
  customerName: string
  customerEmail: string
}

export async function createOrder(order: Omit<Order, "_id">): Promise<Order> {
  try {
    const result = await client.create({
      _type: "order",
      ...order,
    })
    return result
  } catch (error) {
    console.error("Error creating order in Sanity:", error)
    throw error
  }
}

export async function getOrders(): Promise<Order[]> {
  try {
    const orders = await client.fetch('*[_type == "order"] | order(_createdAt desc)')
    return orders
  } catch (error) {
    console.error("Error fetching orders from Sanity:", error)
    throw error
  }
}

export async function removeOrder(orderId: string) {
  if (!token) {
    throw new Error("SANITY_API_TOKEN is not available. This operation should be performed server-side.")
  }
  try {
    const result = await client.delete(orderId)
    return result
  } catch (error) {
    console.error("Error removing order from Sanity:", error)
    throw error
  }
}

