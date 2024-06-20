import type { CollectionConfig } from 'payload'

export const Payments: CollectionConfig = {
    slug: 'payment',
    fields: [
        {
            name: 'order',
            type: 'relationship',
            relationTo: 'orders',
            required: true,
        },
        {
            name: 'payment_method',
            type: 'radio',
            options: [
                {
                    label: 'Paypal',
                    value: 'paypal'
                },
                {
                    label: 'Card',
                    value: 'card'
                }
            ]
        },
        {
            name: 'amount',
            type: 'number',
            required: true,

        },
        {
            name: 'paymentdate',
            type: 'date',
        }
    ]
}