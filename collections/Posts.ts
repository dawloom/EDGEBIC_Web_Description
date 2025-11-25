import type { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', '_status']
  },
  access: {
    read: () => true // Public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title'
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL-friendly version of the title'
      }
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description'
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Content'
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'General',
      options: [
        { label: 'General', value: 'General' },
        { label: 'Production', value: 'Production' },
        { label: 'Scheduling Solutions', value: 'Scheduling Solutions' },
        { label: 'News', value: 'News' },
        { label: 'Updates', value: 'Updates' }
      ],
      label: 'Category'
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          defaultValue: 'EDGEBIC Team',
          label: 'Author Name'
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar Image'
        }
      ]
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image'
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: 'Published Date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime'
        }
      }
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Meta',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title'
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description'
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Meta Image'
        }
      ]
    }
  ],
  versions: {
    drafts: true
  }
};
