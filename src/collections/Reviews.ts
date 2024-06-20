import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
    slug:'reviews',
    fields: [
        {
            name: 'rating',
            type: 'number',
            required: true,
        },
        {
            name: 'product',
            type: 'relationship',
            relationTo: 'products',
            required: true,
        },
        {
            name: 'comment',
            type: 'text',
            required: true,
        },
    ],
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    auth: true,
    admin: {
        useAsTitle: 'name',
    },  
}