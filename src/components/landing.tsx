import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="bg-gray-100 py-2 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Welcome to Lewe - your trusted source for premium cannabinoids. Explore our wide selection of high-quality
            products for your health and wellness.
          </div>
        </div>
      </div>
      <header className="bg-white py-4 shadow dark:bg-gray-950">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <LeafIcon className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-gray-50">Lewe</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
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
      <main className="flex-1">
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
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our selection of premium cannabinoid products to support your health and wellness.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="sm">
                  CBD
                </Button>
                <Button variant="outline" size="sm">
                  CBG
                </Button>
                <Button variant="outline" size="sm">
                  CBN
                </Button>
                <Button variant="outline" size="sm">
                  Delta-8
                </Button>
                <Button variant="outline" size="sm">
                  Delta-9
                </Button>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              <Card>
                <CardContent className="flex flex-col items-center justify-center space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="150"
                    height="150"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">CBD Oil</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our premium CBD oil is made from organic, non-GMO hemp.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl font-bold">$49.99</span>
                      <Button variant="outline" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="150"
                    height="150"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">CBG Capsules</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our CBG capsules are made with pure, high-quality CBG.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl font-bold">$59.99</span>
                      <Button variant="outline" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="150"
                    height="150"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">Delta-8 Gummies</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our Delta-8 gummies are made with natural, hemp-derived Delta-8.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl font-bold">$39.99</span>
                      <Button variant="outline" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="150"
                    height="150"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">CBN Tincture</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our CBN tincture is made with pure, high-quality CBN.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl font-bold">$69.99</span>
                      <Button variant="outline" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from our satisfied customers about their experiences with Lewe.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center space-y-4">
                    <img
                      src="/placeholder.svg"
                      width="64"
                      height="64"
                      alt="Customer"
                      className="aspect-square rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        "I've been using Lewe's products for months and I'm so impressed with the quality and
                        effectiveness. Highly recommended!"
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center space-y-4">
                    <img
                      src="/placeholder.svg"
                      width="64"
                      height="64"
                      alt="Customer"
                      className="aspect-square rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-lg font-medium">Jane Smith</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        "Lewe's products have been a game-changer for my health. I can't recommend them enough!"
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center space-y-4">
                    <img
                      src="/placeholder.svg"
                      width="64"
                      height="64"
                      alt="Customer"
                      className="aspect-square rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-lg font-medium">Michael Johnson</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        "I've tried many cannabinoid products, but Lewe's are by far the best. I'm a lifelong customer!"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6 text-gray-400">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
          <p className="text-sm">&copy; 2024 Lewe. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
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