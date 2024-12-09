import React from 'react'
import { HeartIcon, BellIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline'

const page = () => {
  return (
    
    <div>


<header className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-blue-600 text-2xl font-bold">MORENT</h1>
      <input
        type="text"
        className="flex-1 mx-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search something here..."
      />
       <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <HeartIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <BellIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Cog6ToothIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <UserIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
    </div>
  </header>

<div className="container mx-auto px-6 py-12">
  {/* Card Wrapper */}
  <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Left Section: Car Image and Thumbnails */}
    <div>
      {/* Main Car Image */}
      <div className="bg-blue-100 rounded-lg p-4 mb-4 flex items-center justify-center">
        <img
          src="car2.png"
          alt="Sports Car"
          className="w-full h-auto object-contain"
        />
      </div>
      {/* Thumbnails */}
      <div className="flex gap-4">
        <img
          src="car2.png"
          alt="Thumbnail 1"
          className="w-20 h-20 object-cover rounded-md border-2 border-blue-600 cursor-pointer"
        />
        <img
          src="thumbnail2.png"
          alt="Thumbnail 2"
          className="w-20 h-20 object-cover rounded-md border-2 border-gray-300 cursor-pointer hover:border-blue-600"
        />
        <img
          src="thumbnail3.png"
          alt="Thumbnail 3"
          className="w-20 h-20 object-cover rounded-md border-2 border-gray-300 cursor-pointer hover:border-blue-600"
        />
      </div>
    </div>
    {/* Right Section: Car Details */}
    <div>
      {/* Title and Rating */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Nissan GT - R</h2>
          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
            <span>★★★★★</span>
            <span className="text-gray-500">(440+ Reviewer)</span>
          </div>
        </div>
        <button className="text-red-500 text-xl">❤</button>
      </div>
      {/* Car Description */}
      <p className="text-gray-600 mt-4">
        NISMO has become the embodiment of Nissans outstanding performance,
        inspired by the most unforgiving proving ground, the race track.
      </p>
      {/* Car Specifications */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <p className="text-sm text-gray-500">Type Car</p>
          <p className="text-gray-800 font-semibold">Sport</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Capacity</p>
          <p className="text-gray-800 font-semibold">2 Person</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Steering</p>
          <p className="text-gray-800 font-semibold">Manual</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Gasoline</p>
          <p className="text-gray-800 font-semibold">70L</p>
        </div>
      </div>
      {/* Pricing and Rent Now Button */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-600 font-bold text-xl">$80.00</p>
            <p className="text-gray-400 line-through">$100.00</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

       {/* Main Content */}
  <div className="container mx-auto px-6 py-8 flex">
    {/* Sidebar */}
    <aside className="w-64 bg-white p-6 rounded-lg shadow-md">
      {/* Filter Type */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Type</h2>
        <ul className="space-y-2">
          <li className="text-sm text-gray-600">Sport (10)</li>
          <li className="text-sm text-gray-600">SUV (12)</li>
          <li className="text-sm text-gray-600">MPV (16)</li>
          <li className="text-sm text-gray-600">Sedan (20)</li>
          <li className="text-sm text-gray-600">Coupe (14)</li>
          <li className="text-sm text-gray-600">Hatchback (14)</li>
        </ul>
      </div>
      {/* Filter Capacity */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Capacity</h2>
        <ul className="space-y-2">
          <li className="text-sm text-gray-600">2 Person (10)</li>
          <li className="text-sm text-gray-600">4 Person (12)</li>
          <li className="text-sm text-gray-600">6 Person (12)</li>
          <li className="text-sm text-gray-600">8 or More (16)</li>
        </ul>
      </div>
      {/* Filter Price */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Price</h2>
        <input
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
        />
        <p className="text-sm text-gray-600 mt-2">Max: $100.00</p>
      </div>
    </aside>
    {/* Car Grid */}
    <section className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-6">
      {/* Car Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src="car1.png"
          alt="Car 1"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">Koenigsegg</h3>
        <p className="text-sm text-gray-500 mb-2">Sport</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-semibold">$99.00/day</span>
          <span className="text-sm text-gray-400 line-through">$100.00</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Rent Now
        </button>
      </div>
      {/* Car Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src="car2.png"
          alt="Car 2"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">Nissan GT-R</h3>
        <p className="text-sm text-gray-500 mb-2">Sport</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-semibold">$80.00/day</span>
          <span className="text-sm text-gray-400 line-through">$90.00</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Rent Now
        </button>
      </div>
       {/* Car Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src="car3.png"
          alt="Car 3"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">Rools-Royce</h3>
        <p className="text-sm text-gray-500 mb-2">Sport</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-semibold">$85.00/day</span>
          <span className="text-sm text-gray-400 line-through">$90.00</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Rent Now
        </button>
      </div>

      {/* Car Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src="car4.png"
          alt="Car 4"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">All-new RUSH</h3>
        <p className="text-sm text-gray-500 mb-2">hatchbag</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-semibold">$65.00/day</span>
          <span className="text-sm text-gray-400 line-through">$80.00</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Rent Now
        </button>
      </div>
      {/* Car Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src="car5.png"
          alt="Car 5"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">cr-v</h3>
        <p className="text-sm text-gray-500 mb-2">SUV</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-semibold">$50.00/day</span>
          <span className="text-sm text-gray-400 line-through">$70.00</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Rent Now
        </button>
      </div>


      {/* Car Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src="car4.png"
          alt="Car 4"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">All-new RUSH</h3>
        <p className="text-sm text-gray-500 mb-2">hatchbag</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-semibold">$65.00/day</span>
          <span className="text-sm text-gray-400 line-through">$80.00</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Rent Now
        </button>
      </div>


    </section>
  </div>
  {/* Footer */}
  <footer className="bg-white mt-8 py-6">
    <div className="container mx-auto px-6 flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 className="text-blue-600 text-xl font-bold">MORENT</h3>
        <p className="text-sm text-gray-600 mt-2">
          Our website provides convenience and helps increase your business.
        </p>
      </div>
      <div className="w-full md:w-2/3 flex flex-wrap">
        <div className="w-1/3">
          <h4 className="text-md font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">How it works</li>
            <li className="text-sm text-gray-600">Featured</li>
            <li className="text-sm text-gray-600">Partnership</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h4 className="text-md font-semibold mb-3">Community</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">Events</li>
            <li className="text-sm text-gray-600">Blog</li>
            <li className="text-sm text-gray-600">Podcast</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h4 className="text-md font-semibold mb-3">Socials</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">Discord</li>
            <li className="text-sm text-gray-600">Instagram</li>
            <li className="text-sm text-gray-600">Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>


    </div>
  )
}

export default page

