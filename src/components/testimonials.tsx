import React from "react"
import { Card, CardContent } from "./ui/card"
import Image from 'next/image'



export default function Testimonials() {
  return (
    <section className=" bg-background/70 py-12 md:py-24 lg:py-32">
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
                    <Image
                      src="/images/avatar.jpg"
                      width="64"
                      height="64"
                      alt="Customer"
                      className="aspect-square rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        I ve been using Lewes products for months and Im so impressed with the quality and
                        effectiveness. Highly recommended!
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center space-y-4">
                    <Image
                      src="/images/avatar.jpg"
                      width="64"
                      height="64"
                      alt="Customer"
                      className="aspect-square rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-lg font-medium">Jane Smith</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Lewes products have been a game-changer for my health. I cannot recommend them enough!
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center space-y-4">
                    <Image
                      src="/images/avatar.jpg"
                      width="64"
                      height="64"
                      alt="Customer"
                      className="aspect-square rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-lg font-medium">Michael Johnson</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        I ve tried many cannabinoid products, but Lewes are by far the best. Im a lifelong customer!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
  )
}
