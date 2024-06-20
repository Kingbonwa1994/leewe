import type { CollectionConfig } from 'payload'


export const Shipping: CollectionConfig = {
    slug: 'shipping',
    fields: [
        {
            name: 'order',
            type: 'relationship',
            relationTo: 'orders',
            required: true,
        },
        {
            name: 'address',
            type: 'text',
            required: true,
        },
        {
            name: 'trackingNumber',
            type: 'text',
            required: true,
        }
    ]
}