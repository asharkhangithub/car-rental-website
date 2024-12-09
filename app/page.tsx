import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Herobanner } from './components/Herobanner'
import { Searchbar } from './components/Searchbar'
import { CarCard } from './components/CarCard'

const carData = [
  { name: "koenigsigg", type: "Sports", image: "/car1.png", specs: { capacity: "2 People", transmission: "manual", fuel: "9L" }, price: 99.00 },
  { name: "Nissan gt-r", type: "sports", image: "/car2.png", specs: { capacity: "2 People", transmission: "mannual", fuel: "80L" }, price: 80.00 },
  { name: "Rolls-Royce", type: "Sports", image: "/car3.png", specs: { capacity: "4 People", transmission: "Manual", fuel: "70L" }, price: 96.00 },
  { name: "Nissan gt-r", type: "sports", image: "/car2.png", specs: { capacity: "2 People", transmission: "mannual", fuel: "80L" }, price: 80.00 },
  { name: "Allnew-rush", type: "SUV", image: "/car4.png", specs: { capacity: "6 People", transmission: "mannual", fuel: "60L" }, price: 60.00 },
  { name: "cr-v", type: "Luxury", image: "/car5.png", specs: { capacity: "6 People", transmission: "mannual", fuel: "70L" }, price: 80.99 },
  { name: "Allnew-rush", type: "SUV", image: "/car4.png", specs: { capacity: "6 People", transmission: "mannual", fuel: "60L" }, price: 60.00 },
  { name: "cr-v", type: "Luxury", image: "/car5.png", specs: { capacity: "6 People", transmission: "mannual", fuel: "70L" }, price: 80.99 },
  { name: "MG-zx exclusive", type: "hatchbag", image: "/car6.png", specs: { capacity: "4 People", transmission: "mannual", fuel: "70L" }, price: 85.99 },
  { name: "NewMg-zs", type: "Suv", image: "/car7.png", specs: { capacity: "6 People", transmission: "mannual", fuel: "80L" }, price: 80.99 },
  { name: "MG-zx exclusive", type: "hatchbag", image: "/car6.png", specs: { capacity: "4 People", transmission: "mannual", fuel: "70L" }, price: 85.99 },
  { name: "NewMg-zs", type: "Suv", image: "/car7.png", specs: { capacity: "6 People", transmission: "mannual", fuel: "80L" }, price: 80.99 },



];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Herobanner
              title="The Best Platform for Car Rental"
              description="Ease of doing a car rental safely and reliably. Of course at a low price."
              image="/car1.png"
              className="bg-blue-600"
            />
            <Herobanner
              title="Easy way to rent a car at a low price"
              description="Providing cheap car rental services and safe and comfortable facilities."
              image="/car2.png"
              className="bg-blue-500"
            />
          </div>
          <Searchbar />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {carData.map((car, index) => (
              <CarCard
                key={index}
                name={car.name}
                type={car.type}
                image={car.image}
                specs={car.specs}
                price={car.price}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

