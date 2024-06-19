import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    
    <section className="bg-gradient-to-r from-green-500 to-green-600 py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Discover the Power of Cannabinoids
          </h1>
          <p className="text-gray-200 md:text-xl">
            Lewe offers a wide range of premium cannabinoid products to support your health and wellness. Explore
            our selection and find the perfect solution for you.
          </p>
          <div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-green-600 shadow transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500 dark:bg-gray-950 dark:text-green-400 dark:hover:bg-gray-800"
              prefetch={false}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/pic1.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
