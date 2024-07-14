import Link from "next/link"
import { Carousel, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  const products = [
    {
      id: 1,
      name: "Lewe CBD Gummies",
      description: "Premium CBD infused gummies for daily wellness",
      price: 49.99,
      images: [
        "/images/pic1.jpg",
        "/images/pic2.jpg",
        "/images/pic3.jpg",
      ],
    },
    {
      id: 2,
      name: "Lewe Delta-8 Tincture",
      description: "Potent Delta-8 THC tincture for relaxation",
      price: 59.99,
      images: [
        "/images/pic1.jpg",
        "/images/pic2.jpg",
        "/images/pic3.jpg",
      ],
    },
    {
      id: 3,
      name: "Lewe CBG Capsules",
      description: "Broad spectrum CBG supplements for wellness",
      price: 39.99,
      images: [
        "/images/pic1.jpg",
        "/images/pic2.jpg",
        "/images/pic3.jpg",
      ],
    },
    {
      id: 4,
      name: "Lewe CBC Topical Cream",
      description: "Soothing CBC infused topical cream",
      price: 29.99,
      images: [
        "/images/pic1.jpg",
        "/images/pic2.jpg",
        "/images/pic3.jpg",
      ],
    },
    {
      id: 5,
      name: "Lewe CBN Softgels",
      description: "Restful CBN supplements for better sleep",
      price: 49.99,
      images: [
        "/images/pic1.jpg",
        "/images/pic2.jpg",
        "/images/pic3.jpg",
      ],
    },
    {
      id: 6,
      name: "Lewe THCV Gummies",
      description: "Energizing THCV infused gummies",
      price: 39.99,
      images: [
        "/images/pic5.jpg",
        "/images/pic2.jpg",
        "/images/pic7.jpg",
      ],
    },
  ]
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop Lewe</h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our premium cannabinoid products for wellness and relaxation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View {product.name}</span>
              </Link>
              <Carousel className="aspect-square overflow-hidden">
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={`${product.images[index]}`}
                      alt={`${product.name} image ${index + 1}`}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </Carousel>
              <div className="absolute inset-0 bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}