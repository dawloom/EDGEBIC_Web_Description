import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'publishedAt', '_status']
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
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Low Impact', value: 'lowImpact' },
            { label: 'Medium Impact', value: 'mediumImpact' },
            { label: 'High Impact', value: 'highImpact' }
          ],
          defaultValue: 'lowImpact'
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Hero Content'
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Image'
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'link',
              type: 'group',
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  options: [
                    { label: 'Custom', value: 'custom' },
                    { label: 'Reference', value: 'reference' }
                  ],
                  defaultValue: 'custom'
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (data, siblingData) => siblingData?.type === 'custom'
                  }
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  label: 'Open in new tab',
                  defaultValue: false
                },
                {
                  name: 'appearance',
                  type: 'select',
                  options: [
                    { label: 'Default', value: 'default' },
                    { label: 'Outline', value: 'outline' }
                  ],
                  defaultValue: 'default'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        {
          slug: 'mediaBlock',
          fields: [
            {
              name: 'blockName',
              type: 'text',
              label: 'Block Name'
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true
            }
          ]
        },
        {
          slug: 'cta',
          fields: [
            {
              name: 'blockName',
              type: 'text',
              label: 'Block Name'
            },
            {
              name: 'richText',
              type: 'richText'
            },
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'link',
                  type: 'group',
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      required: true
                    },
                    {
                      name: 'url',
                      type: 'text'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
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
