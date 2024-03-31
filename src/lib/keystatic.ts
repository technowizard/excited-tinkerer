import 'server-only';

import { cache } from 'react';

import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '~/keystatic.config';

export const getReader = cache(() =>
  createReader(process.cwd(), keystaticConfig),
);

export const getArticle = cache(getReader().collections.articles.readOrThrow);
export const getSortedArticles = cache(async () => {
  const reader = getReader();
  const articles = await reader.collections.articles.all();

  const sortedArticles = articles.sort((a, b) => {
    const aDate = new Date(a.entry.publishedAt);
    const bDate = new Date(b.entry.publishedAt);

    if (aDate < bDate) {
      return 1;
    }

    if (aDate > bDate) {
      return -1;
    }

    return 0;
  });

  return sortedArticles;
});

export const getProject = cache(getReader().collections.projects.readOrThrow);
export const getSortedProjects = cache(async () => {
  const reader = getReader();
  const projects = await reader.collections.projects.all();

  const sortedProjects = projects.sort((a, b) => {
    const aDate = new Date(a.entry.publishedAt);
    const bDate = new Date(b.entry.publishedAt);

    if (aDate < bDate) {
      return 1;
    }

    if (aDate > bDate) {
      return -1;
    }

    return 0;
  });

  return sortedProjects;
});

// export const getCustomPages = cache(getReader().collections.pages.all)
// export const getCustomPage = cache(getReader().collections.pages.readOrThrow)

// export const getHomeSingleton = cache(getReader().singletons.home?.readOrThrow)

// export const getProjects = cache(async () => {
//   const reader = getReader();
//   const { entries } = await reader.singletons.projects?.readOrThrow();

//   return entries;
// });
