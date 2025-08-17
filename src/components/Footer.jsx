import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter , Instagram , Facebook} from 'lucide-react'

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 lg:px-8">
        <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">© 2024 TravelTales. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 justify-center sm:ml-auto">
          <Link className="text-xs sm:text-sm hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs sm:text-sm hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4 justify-center sm:justify-end">
          <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
