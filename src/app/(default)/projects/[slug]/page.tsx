import { getArticleRenderers } from '@/components/keystatic/article-renderers';
import ProseArticle from '@/components/prose-article';
import { getProject, getSortedProjects } from '@/lib/keystatic';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { defaultMetadata } from '~/site.config';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<
  ProjectPageProps['params'][]
> {
  const projects = await getSortedProjects();

  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug).catch(() => notFound());

  return {
    authors: [
      {
        name: defaultMetadata.title,
      },
    ],
    description: project.subtitle,
    title: project.title,
  };
}

export default async function Page({ params }: ProjectPageProps) {
  const project = await getProject(params.slug).catch(() => notFound());
  const document = await project.content();
  const renderers = getArticleRenderers();

  return (
    <section className="relative space-y-4 p-8 md:py-16">
      <h1 className="mx-auto max-w-4xl text-4xl font-bold">{project.title}</h1>
      <p className="mx-auto max-w-4xl text-denim-600 dark:text-denim-50">
        {project.subtitle}
      </p>

      <div className="mx-auto max-w-4xl">
        <p className="text-lg font-semibold text-denim-600 dark:text-denim-50">
          Goal
        </p>
        <p className="mt-2 text-denim-600 dark:text-denim-50">{project.goal}</p>
      </div>

      <div className="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-2">
        <div>
          <p className="text-lg font-semibold text-denim-600 dark:text-denim-50">
            Associated With
          </p>
          <p className="mt-2 text-denim-600 dark:text-denim-50">
            {project.associatedWith}
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-denim-600 dark:text-denim-50">
            Timeline
          </p>
          <p className="mt-2 text-denim-600 dark:text-denim-50">
            {project.timeline}
          </p>
        </div>
      </div>

      <div className="prose mx-auto w-full max-w-4xl">
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          alt="project-cover-image"
          className="mx-auto my-8 aspect-video rounded-md bg-neutral-500 object-cover"
          src={project.cover}
        />
      </div>

      <ProseArticle>
        <DocumentRenderer document={document} renderers={renderers} />
      </ProseArticle>
    </section>
  );
}
