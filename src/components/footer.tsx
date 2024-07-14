import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-green-500 to-green-600 py-6 text-gray-100">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
      <p className="text-sm">&copy; 2024 Lewe. All rights reserved.</p>
      <nav className="flex items-center gap-4">
        <Link href="/privacypolicy" className="text-sm hover:text-gray-400" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="text-sm hover:text-gray-200" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="/contact-us" className="text-sm hover:text-gray-200" prefetch={false}>
          Contact Us
        </Link>
      </nav>
    </div>
  </footer>
  )
}
