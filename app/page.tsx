
import ProductListing from "./components/ProductListing";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Welcome to Car Rental</h1>
      <ProductListing />
    </div>
  )
}

