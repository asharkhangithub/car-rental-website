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



  <div className="min-h-screen flex">
    {/* Sidebar */}
    <aside className="bg-white w-64 p-6 space-y-8 shadow-lg">
      {/* Main Menu */}
      <div>
        <h2 className="text-lg font-bold text-gray-700 mb-4">MAIN MENU</h2>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center p-2 text-blue-600 bg-blue-50 rounded-lg"
          >
            <span className="material-icons mr-3">dashboard</span> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">directions_car</span> Car Rent
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">insights</span> Insight
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">money</span> Reimburse
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">inbox</span> Inbox
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">calendar_today</span> Calendar
          </a>
        </nav>
      </div>
      {/* Preferences */}
      <div>
        <h2 className="text-lg font-bold text-gray-700 mb-4">PREFERENCES</h2>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">settings</span> Settings
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">help_outline</span> Help &amp;
            Center
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="material-icons mr-3">brightness_2</span> Dark Mode
          </a>
        </nav>
      </div>
      {/* Logout */}
      <div>
        <a
          href="#"
          className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <span className="material-icons mr-3">logout</span> Log Out
        </a>
      </div>
    </aside>
    {/* Main Content */}
    <main className="flex-1 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Details Rental */}
        <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Details Rental
          </h3>
          <div className="h-48 bg-blue-100 rounded-lg mb-6 flex justify-center items-center">
            <span className="text-blue-500 text-2xl font-bold">
              Map Placeholder
            </span>
          </div>
          <div className="flex items-center mb-6">
            <img
              src="car2.png"
              alt="Nissan GT-R"
              className="w-28 h-20 object-cover rounded-lg mr-4"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-700">
                Nissan GT - R
              </h4>
              <p className="text-sm text-gray-500">Sport Car</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-bold text-gray-600">Pick - Up</h5>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Kota Semarang</p>
                <p className="text-sm text-gray-500">20 July 2022</p>
                <p className="text-sm text-gray-500">07:00</p>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-bold text-gray-600">Drop - Off</h5>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Kota Semarang</p>
                <p className="text-sm text-gray-500">21 July 2022</p>
                <p className="text-sm text-gray-500">01:00</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-700">
              Total Rental Price
            </h4>
            <p className="text-2xl font-bold text-gray-800">$80.00</p>
            <p className="text-sm text-gray-500">
              Overall price and includes rental discount
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="space-y-6">
          {/* Top 5 Car Rentals */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Top 5 Car Rental
            </h3>
            <div className="h-48 bg-blue-50 rounded-lg flex justify-center items-center">
              <span className="text-blue-500 text-2xl font-bold">
                Graph Placeholder
              </span>
            </div>
          </div>
          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Recent Transactions{" "}
              <a href="#" className="text-blue-500 text-sm">
                View All
              </a>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img
                  src="car2.png"
                  alt="Car"
                  className="w-12 h-12 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Nissan GT - R
                  </h4>
                  <p className="text-xs text-gray-500">20 July</p>
                </div>
                <p className="text-sm font-semibold text-gray-700">$80.00</p>
              </li>
              <li className="flex items-center">
                <img
                  src="car1.png"
                  alt="Car"
                  className="w-12 h-12 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Koenigsegg
                  </h4>
                  <p className="text-xs text-gray-500">19 July</p>
                </div>
                <p className="text-sm font-semibold text-gray-700">$99.00</p>
              </li>
              <li className="flex items-center">
                <img
                  src="car3.png"
                  alt="Car"
                  className="w-12 h-12 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Rolls-Royce
                  </h4>
                  <p className="text-xs text-gray-500">18 July</p>
                </div>
                <p className="text-sm font-semibold text-gray-700">$96.00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
    </div>
  )
}

export default page
