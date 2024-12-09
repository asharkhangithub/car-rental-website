import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MORENT
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">How it works</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Featured</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Partnership</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Events</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Podcast</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Discord</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Instagram</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">©2023 MORENT. All rights reserved</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy & Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

