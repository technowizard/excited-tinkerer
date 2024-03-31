/* eslint-disable sort-keys-fix/sort-keys-fix */
import { collection, fields } from '@keystatic/core';

export const projectSchema = collection({
  format: { contentField: 'content' },
  label: 'Projects',
  path: 'src/content/projects/*',
  schema: {
    cover: fields.image({
      label: 'Cover',
      description: 'The cover image for the project',
      directory: 'public/images/projects',
      publicPath: '/images/projects',
      validation: {
        isRequired: true,
      },
    }),
    title: fields.slug({ name: { label: 'Title' } }),
    subtitle: fields.text({
      description: 'The subtitle of the project',
      label: 'Subtitle',
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    goal: fields.text({
      description: 'The main goal of the project',
      label: 'Goal',
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    associatedWith: fields.text({
      description: 'The organization you are associated with the project',
      label: 'Timeline',
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    timeline: fields.text({
      description: 'The timeline of the project',
      label: 'Timeline',
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    publishedAt: fields.date({
      defaultValue: { kind: 'today' },
      description: 'The date the project was published',
      label: 'Published At',
      validation: {
        isRequired: true,
      },
    }),
    link: fields.conditional(
      fields.checkbox({
        label: 'Include project link',
        description: 'Whether to include a link to the project',
      }),
      {
        false: fields.empty(),
        true: fields.object({
          href: fields.url({
            label: 'Project URL',
            description: 'The URL of the project',
            validation: {
              isRequired: true,
            },
          }),
          label: fields.text({
            label: 'Project URL Label',
            description: 'The label for the project URL',
          }),
        }),
      },
    ),
    draft: fields.checkbox({
      defaultValue: false,
      description:
        'If enabled, the project will not be listed on the site but can still be accessed via the URL',
      label: 'Mark as draft',
    }),
    content: fields.document({
      dividers: true,
      formatting: true,
      images: {
        directory: 'public/assets/projects',
        publicPath: '/assets/projects',
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
  previewUrl: `${process.env.APP_URL}/projects/{slug}`,
});
