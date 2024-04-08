import { getSortedProjects } from '@/lib/keystatic';
import { Metadata } from 'next';
import { ProjectCard } from './_components/project-card';

export const metadata: Metadata = {
  description: "Things I've made trying to put my legacy on the universe.",
  title: 'Projects',
};

export default async function Page() {
  const projects = await getSortedProjects();

  return (
    <section className="container mx-auto w-full max-w-6xl p-8 text-denim-600 dark:text-denim-50 md:py-16">
      <div className="prose-xl flex max-w-2xl flex-col">
        <h2 className="tracking-tight text-denim-600 dark:text-denim-50">
          Things I&apos;ve made trying to put my legacy on the universe.
        </h2>
        <p className="max-w-2xl text-denim-600 dark:text-denim-50">
          I&apos;ve worked on several projects over the years, but these are
          some of the ones that I&apos;m most proud of. If you see something
          that piques your interest, check out my stories below
        </p>
      </div>
      <div className="mt-16 grid w-full grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ entry, slug }) => {
          if (entry.draft) {
            return null;
          }

          return <ProjectCard entry={entry} key={slug} slug={slug} />;
        })}
      </div>
    </section>
  );
}
