import { AdaptiveLink } from '@/components/adaptive-link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { formatLongDate } from '@/lib/utils';
import { Entry } from '@keystatic/core/reader';
import keystaticConfig from '~/keystatic.config';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';

type EntryProps = Entry<(typeof keystaticConfig)['collections']['articles']>;

interface ArticleCardProps {
  entry: EntryProps;
  slug: string;
}

export function ArticleCard({ entry, slug }: ArticleCardProps) {
  const { cover, description, publishedAt, title } = entry;
  return (
    <div className="group relative flex flex-col">
      <div className="absolute -inset-4 z-0 scale-95 rounded-lg bg-denim-200/70 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-denim-800/50 sm:-inset-x-4 sm:rounded-2xl" />
      <AdaptiveLink href={`/articles/${slug}`}>
        <span className="absolute -inset-4 z-20 rounded-lg sm:-inset-x-6 sm:rounded-2xl" />
        <div className="relative z-10">
          <AspectRatio ratio={16 / 9}>
            <Image
              alt="article-cover-image"
              className="rounded-xl object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
              src={cover}
            />
          </AspectRatio>
        </div>

        <div className="relative z-10 mt-4 text-base font-bold text-denim-600 dark:text-denim-50 md:text-xl">
          {title}
        </div>

        <div className="mt-2 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <CalendarIcon className="relative z-10 size-4" />
            <time
              className="relative z-10 ml-2 text-sm font-semibold text-denim-600 dark:text-denim-50"
              dateTime={publishedAt}
            >
              {formatLongDate(publishedAt)}
            </time>
          </div>
        </div>

        <p className="relative z-10 mt-4 text-sm">{description}</p>
      </AdaptiveLink>
    </div>
  );
}
