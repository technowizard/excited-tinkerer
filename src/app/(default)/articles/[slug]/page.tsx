import { getArticleRenderers } from '@/components/keystatic/article-renderers';
import ProseArticle from '@/components/prose-article';
import { getArticle, getSortedArticles } from '@/lib/keystatic';
import { formatLongDate } from '@/lib/utils';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { CalendarIcon, FilePenIcon } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { defaultMetadata } from '~/site.config';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false

export async function generateStaticParams(): Promise<ArticlePageProps['params'][]> {
  const articles = await getSortedArticles()

  return articles.map(({slug}) => ({ slug }))
}

export async function generateMetadata({params}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params.slug).catch(() => notFound())

  return {
    authors: [{
      name: defaultMetadata.title
    }],
    description: article.description,
    title: article.title
  }
}

export default async function Page({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug).catch(() => notFound());
  const document = await article.content();
  const renderers = getArticleRenderers();

  return (
    <section className="relative space-y-4 p-8 md:py-16">
      <div className="prose mx-auto w-full max-w-4xl">
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          alt="article-cover-image"
          className="mx-auto mb-8 aspect-video rounded-md bg-neutral-500 object-cover"
          src={article.cover}
        />
      </div>

      <h1 className="mx-auto max-w-4xl text-4xl font-bold">{article.title}</h1>
      <p className="mx-auto max-w-4xl space-y-4 text-denim-600 dark:text-denim-50">
        {article.description}
      </p>
      <div className="mx-auto !mb-8 flex max-w-4xl flex-col gap-4 text-sm text-denim-600 dark:text-denim-50 sm:flex-row sm:items-center">
        <div className="flex flex-row items-center gap-x-1 font-semibold">
          <CalendarIcon aria-hidden="true" className="size-4" />
          <span>Published at</span>
          <time dateTime={article.publishedAt}>
            {formatLongDate(article.publishedAt)}
          </time>
        </div>
        {article.updatedAt ? (
          <div className="flex flex-row items-center gap-x-1">
            <FilePenIcon className="size-4" />
            <span>Updated at</span>
            <time dateTime={article.updatedAt}>
              {formatLongDate(article.updatedAt)}
            </time>
          </div>
        ) : null}
      </div>
      <ProseArticle>
        <DocumentRenderer document={document} renderers={renderers} />
      </ProseArticle>
    </section>
  );
}
