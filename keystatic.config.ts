/* eslint-disable sort-keys-fix/sort-keys-fix */
import { articleSchema } from '@/schema/articles';
import { projectSchema } from '@/schema/projects';
import { config } from '@keystatic/core';

export default config({
  collections: {
    articles: articleSchema,
    projects: projectSchema,
  },
  storage: {
    kind: 'local',
  },
});
