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


  <div className="container mx-auto py-12 px-6">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2 space-y-6">
        {/* Billing Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Billing Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-2 border rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full mt-1 p-2 border rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full mt-1 p-2 border rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Town/City</label>
              <input
                type="text"
                placeholder="Town/City"
                className="w-full mt-1 p-2 border rounded-lg text-gray-800"
              />
            </div>
          </div>
        </div>
        {/* Rental Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Rental Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pick-Up Info */}
            <div>
              <label className="text-sm text-gray-600">Pick - Up</label>
              <input
                type="text"
                placeholder="Select your city"
                className="w-full mt-1 p-2 border rounded-lg text-gray-800"
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
                <input
                  type="time"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>
            </div>
            {/* Drop-Off Info */}
            <div>
              <label className="text-sm text-gray-600">Drop - Off</label>
              <input
                type="text"
                placeholder="Select your city"
                className="w-full mt-1 p-2 border rounded-lg text-gray-800"
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
                <input
                  type="time"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Payment Method */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Payment Method
          </h3>
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>Credit Card</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Expiration Date (MM/YY)"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Card Holder"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>PayPal</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>Bitcoin</span>
              </label>
            </div>
          </div>
        </div>
        {/* Confirmation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Confirmation
          </h3>
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>
                I agree with sending marketing and newsletter emails. No spam,
                promised!
              </span>
            </label>
          </div>
          <div className="mt-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>I agree with terms and conditions.</span>
            </label>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Rental Summary
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="car2.png"
              alt="Car"
              className="w-20 h-16 object-cover rounded-lg"
            />
            <div>
              <h4 className="text-gray-800 font-semibold">Nissan GT - R</h4>
              <p className="text-yellow-500 text-sm">★★★★☆</p>
            </div>
          </div>
          <div className="text-gray-600">
            <p>Total Rental Price</p>
            <p className="text-2xl font-semibold text-gray-800">$80.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>

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
