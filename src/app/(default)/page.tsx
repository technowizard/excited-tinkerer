import { getSortedArticles, getSortedProjects } from '@/lib/keystatic';
import Image from 'next/image';
import { ArticleCard } from './articles/_components/article-card';
import { ProjectCard } from './projects/_components/project-card';

export default async function Home() {
  const articles = await getSortedArticles();
  const projects = await getSortedProjects();

  return (
    <section className="mx-auto mb-8 flex w-full max-w-6xl flex-col justify-center gap-8 py-16 text-denim-600 dark:text-denim-50">
      <div className="container w-full lg:px-8">
        <Image
          alt="avatar-img"
          className="circle bg-transparent object-cover"
          height={120}
          src="/images/home/avatar.jpg"
          width={120}
        />
        <h1 className="mb-1 mt-4 text-4xl tracking-tight text-denim-600 dark:text-denim-50 md:mt-6 md:text-5xl">
          Muhammad Fadhil
        </h1>
        <p className="mb-4 text-sm font-medium text-denim-600 dark:text-denim-50 md:text-lg">
          Software Engineer specialized in frontend development
        </p>
        <p className="max-w-lg text-denim-600 dark:text-denim-50">
          I craft things for the web, strive to build a meaningful product that
          is performant with thoughtful user experience.
        </p>
      </div>

      <div className="container">
        <h2 className="tracking-tight text-denim-600 dark:text-denim-50">
          Recent Articles
        </h2>

        <div className="mt-8 grid w-full grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map(({ entry, slug }) => {
            if (entry.draft) {
              return null;
            }

            return <ArticleCard entry={entry} key={slug} slug={slug} />;
          })}
        </div>
      </div>

      <div className="container">
        <h2 className="tracking-tight text-denim-600 dark:text-denim-50">
          Recent Projects
        </h2>

        <div className="mt-8 grid w-full grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ entry, slug }) => {
            if (entry.draft) {
              return null;
            }

            return <ProjectCard entry={entry} key={slug} slug={slug} />;
          })}
        </div>
      </div>
    </section>
  );
}
