
import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full flex">
      <section className=" flex flex-1 bg-background py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-white/90">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text ">
              Have a question or want to learn more about our cannabinoid products? Reach out to us through the
              following channels.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white/90 p-6 shadow-md">
              <div className="flex items-center">
                <div className="rounded-full bg-[#E6F4F1] p-3">
                  <PhoneIcon className="h-6 w-6 text-[#00C853]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#333333]">WhatsApp</h3>
                  <p className="text-[#666666]">+1 (555) 123-4567</p>
                  <Link
                    href="#"
                    className="mt-2 inline-flex items-center text-[#00C853] hover:underline"
                    prefetch={false}
                  >
                    Chat with us
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white/90 p-6 shadow-md">
              <div className="flex items-center">
                <div className="rounded-full bg-[#E6F4F1] p-3">
                  <TextIcon className="h-6 w-6 text-[#0088CC]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#333333]">Telegram</h3>
                  <p className="text-[#666666]">@leweofficial</p>
                  <Link
                    href="#"
                    className="mt-2 inline-flex items-center text-[#0088CC] hover:underline"
                    prefetch={false}
                  >
                    Join our channel
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white/90 p-6 shadow-md">
              <div className="flex items-center">
                <div className="rounded-full bg-[#E6F4F1] p-3">
                  <MailOpenIcon className="h-6 w-6 text-[#0077B6]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#333333]">Email</h3>
                  <p className="text-[#666666]">info@lewe.com</p>
                  <Link
                    href="#"
                    className="mt-2 inline-flex items-center text-[#0077B6] hover:underline"
                    prefetch={false}
                  >
                    Send us a message
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white/90 p-6 shadow-md">
              <div className="flex items-center">
                <div className="rounded-full bg-[#E6F4F1] p-3">
                  <TwitterIcon className="h-6 w-6 text-[#1DA1F2]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#333333]">Twitter</h3>
                  <p className="text-[#666666]">@leweofficial</p>
                  <Link
                    href="#"
                    className="mt-2 inline-flex items-center text-[#1DA1F2] hover:underline"
                    prefetch={false}
                  >
                    Follow us
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ArrowRightIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function MailOpenIcon(props:any) {
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}


function PhoneIcon(props:any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TextIcon(props:any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}


function TwitterIcon(props:any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}