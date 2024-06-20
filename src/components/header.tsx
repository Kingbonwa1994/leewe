import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'

export default function Header() {
  return (
  <header className="bg-white py-4 shadow dark:bg-gray-950">
    <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <LeafIcon className="h-6 w-6 text-green-500" />
        <span className="text-xl font-bold text-gray-900 dark:text-green-500">Lewe</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/shop"
          className="dark:text-green-500 dark:hover:text-green-400"
          prefetch={false}
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="text-gray-600 hover:text-gray-900  dark:text-green-500"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/blog"
          className="text-gray-600 hover:text-gray-900 dark:text-green-500"
          prefetch={false}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-gray-600 hover:text-gray-900  dark:text-green-500 dark:hover:text-green-400"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4 dark:text-green-500 dark:hover:text-green-400">
        <Button variant="outline" size="sm" className="hidden md:inline-flex">
          <SearchIcon className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="outline" size="sm" className="hidden md:inline-flex">
          <ShoppingCartIcon className="h-4 w-4" />
          <span className="sr-only">Cart</span>
        </Button>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="h-4 w-4" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </div>
  </header>
  )
}
   
     
function LeafIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  }
  
  
  function MenuIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function SearchIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function ShoppingCartIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
     
     
     
