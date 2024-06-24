import  payload  from 'payload'


export default function Component() {

const findUser = async () => {
  const users = await payload.find({
    collection: 'users',
  
  })
  console.log(users)
}
findUser();

  return (
    <div className=" bg-background w-full max-w-3xl mx-auto py-12 md:py-20 px-4 md:px-0">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Effective Date: June 20, 2024</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Information Collection</h2>
          <p className="text-muted-foreground">
            Lewe collects certain personal information from our customers, including name, email address, shipping
            address, and payment information. We may also collect information about your browsing and purchasing
            behavior on our website.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Use of Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect to process your orders, communicate with you about your account and our
            products, and improve our website and services. We may also use your information for marketing purposes,
            such as sending you newsletters or promotional offers, but you can opt-out of these communications at any
            time.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Sharing of Information</h2>
          <p className="text-muted-foreground">
            Lewe may share your personal information with third-party service providers who assist us with our business
            operations, such as payment processors and shipping carriers. We do not sell or rent your personal
            information to any third parties for their own marketing purposes.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Security Measures</h2>
          <p className="text-muted-foreground">
            Lewe takes reasonable measures to protect your personal information from unauthorized access, use, or
            disclosure. We use industry-standard encryption and security protocols to safeguard your data, and we
            regularly review and update our security practices to ensure they remain effective.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">User Rights</h2>
          <p className="text-muted-foreground">
            You have the right to access, correct, or delete your personal information at any time. You can also opt-out
            of receiving marketing communications from us. If you have any questions or concerns about our privacy
            practices, please contact us at privacy@lewe.com.
          </p>
        </div>
      </div>
    </div>
  )
}