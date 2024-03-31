/* eslint-disable sort-keys-fix/sort-keys-fix */
import { collection, fields } from '@keystatic/core';

export const articleSchema = collection({
  format: { contentField: 'content' },
  label: 'Articles',
  path: 'src/content/articles/*',
  schema: {
    cover: fields.image({
      label: 'Cover',
      description: 'The cover image for the article',
      directory: 'public/images/articles',
      publicPath: '/images/articles',
      validation: {
        isRequired: true,
      },
    }),
    title: fields.slug({ name: { label: 'Title' } }),
    description: fields.text({
      description: 'The description of the article',
      label: 'Description',
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    publishedAt: fields.date({
      defaultValue: { kind: 'today' },
      description: 'The date the article was published',
      label: 'Published At',
      validation: {
        isRequired: true,
      },
    }),
    updatedAt: fields.date({
      label: 'Updated At',
      description: 'The date the article was updated',
      validation: {
        isRequired: false,
      },
    }),
    draft: fields.checkbox({
      defaultValue: false,
      description:
        'If enabled, the article will not be listed on the site but can still be accessed via the URL',
      label: 'Mark as draft',
    }),
    content: fields.document({
      dividers: true,
      formatting: true,
      images: {
        directory: 'public/assets/articles',
        publicPath: '/assets/articles',
        schema: {
          title: fields.text({
            description: 'The text to display under the image in a caption.',
            label: 'Caption',
          }),
        },
      },
      label: 'Content',
      links: true,
    }),
  },
  slugField: 'title',
  previewUrl: `${process.env.APP_URL}/articles/{slug}`,
});
