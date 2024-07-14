import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "./header"
import Image from "next/image"
import Hero from "./hero"
import Testimonials from './testimonials'
import Footer from "./footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
     <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-12 md:py-24 lg:py-32 bg-background">
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
            <div className="mx-auto items-center bg-background grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              <Card>
                <CardContent className="flex flex-col pt-2 items-center justify-center space-y-4">
                  <Image
                    src="/images/pic3.jpg"
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
                      <Button variant={"outline"} className=" bg-green-500 hover:bg-green-400" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col pt-2 items-center justify-center space-y-4">
                  <Image
                    src="/images/pic4.jpg"
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
                      <Button variant="outline" className=" bg-green-500 hover:bg-green-400"  size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col pt-2 items-center justify-center space-y-4">
                  <Image
                    src="/images/pic9.jpg"
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
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-xl font-bold">$39.99</span>
                      <Button variant="outline" className=" bg-green-500 hover:bg-green-400"  size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col pt-2 items-center justify-center space-y-4">
                  <Image
                    src="/images/pic7.jpg"
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
                      <Button variant="outline" className=" bg-green-500 hover:bg-green-400"  size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
     <Footer />
    </div>
  )
}