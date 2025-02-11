import type { Metadata } from "next";
import { client } from "../../../sanity/lib/sanity";
import CarDetailClient from "../../components/CarDetailClient";
import { Car } from "../../components/ProductListing";

// Define the Car type


// ✅ Fetch car details
async function getCar(id: string): Promise<Car | null> {
  const query = `*[_type == "car" && _id == $id][0] {
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    image
  }`;
  return client.fetch(query, { id });
}

// ✅ Define the correct props structure
interface PageProps {
  params: { id: string };  // ✅ Ensure params is an object, NOT a Promise
}

// ✅ Correctly typed generateMetadata function
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const car = await getCar(params.id);
  return {
    title: car ? `${car.name} | Car Rental` : "Car Not Found",
    description: car ? `Rent the ${car.brand} ${car.name} today!` : "Car details not available",
  };
}

// ✅ Correct page function
export default async function CarDetailPage({ params }: PageProps) {
  const car = await getCar(params.id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return <CarDetailClient car={car} />;
}
