import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'text',
            required: true,
        },
        {
            name: 'stockStatus',
            type: 'text',
            required: true,
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'products',
        },
    ],
    upload: true,
    admin: {
        useAsTitle: 'name',
    },
    auth: true,
    access: {
        read: () => true,
    },
}