/* eslint-disable sort-keys-fix/sort-keys-fix */
import { BrandMark } from '@/components/keystatic/brand-mark';
import { articleSchema } from '@/schema/articles';
import { projectSchema } from '@/schema/projects';
import { config } from '@keystatic/core';
import { defaultMetadata } from './site.config';

// production handled by vercel
const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export default config({
  collections: {
    articles: articleSchema,
    projects: projectSchema,
  },
  storage: isProduction
    ? {
        kind: 'github',
        repo: {
          name:
            process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG ||
            defaultMetadata.github.repository,
          owner:
            process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER ||
            defaultMetadata.github.username,
        },
      }
    : {
        kind: 'local',
      },
  ui: {
    brand: {
      mark: BrandMark,
      name: defaultMetadata.title,
    },
    navigation: {
      Content: ['articles', 'projects'],
    },
  },
});
