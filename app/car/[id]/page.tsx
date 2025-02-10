import CarDetailClient from "@/app/components/CarDetailClient";
import { client } from "@/sanity/lib/client";

async function getCar(id: string) {
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

// Ensure `params` is correctly typed
interface CarDetailPageProps {
  params: { id: string };
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const car = await getCar(params.id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return <CarDetailClient car={car} />;
}
