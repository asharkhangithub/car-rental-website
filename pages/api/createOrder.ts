import { createOrder, Order } from "@/sanity/lib/sanity"
import type { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const order: Omit<Order, "_id"> = req.body
    const createdOrder = await createOrder(order)
    res.status(200).json(createdOrder)
  } catch (error) {
    console.error("Error creating order:", error)
    res
      .status(500)
      .json({ message: "Error creating order", error: error instanceof Error ? error.message : String(error) })
  }
}

