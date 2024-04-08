import { getSortedArticles } from '@/lib/keystatic';
import { Metadata } from 'next';
import { ArticleCard } from './_components/article-card';

export const metadata: Metadata = {
  description: 'Writing on software development and random personal thoughts.',
  title: 'Articles',
};

export default async function Page() {
  const articles = await getSortedArticles();

  return (
    <section className="container mx-auto w-full max-w-6xl p-8 text-denim-600 dark:text-denim-50 md:py-16">
      <div className="prose-xl flex max-w-2xl flex-col">
        <h2 className="tracking-tight text-denim-600 dark:text-denim-50">
          Writing on software development and random personal thoughts.
        </h2>
        <p className="max-w-xl text-denim-600 dark:text-denim-50">
          All of my long-form thoughts on programming and thoughts about life
          collected in chronological order
        </p>
      </div>
      <div className="mt-16 grid w-full grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map(({ entry, slug }) => {
          if (entry.draft) {
            return null;
          }

          return <ArticleCard entry={entry} key={slug} slug={slug} />;
        })}
      </div>
    </section>
  );
}
