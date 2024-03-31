import { AdaptiveLink } from '@/components/adaptive-link';
import { careers } from '@/constants/careers';
import { links } from '@/constants/links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About'
}

export default function AboutPage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start justify-center gap-y-4 p-8 md:py-16">
      <h1 className="text-xl tracking-tight md:text-2xl">
        Hi, I&apos;m Fadhil 👋 A software engineer based in Indonesia 🇮🇩
      </h1>

      <article className="prose">
        <p className="text-denim-700 dark:text-denim-50">
          I started my career working as a cloud engineer at one of the biggest
          telco companies in Indonesia. After two years of working, I decided to
          shift my career as a frontend engineer since I was interested in UI/UX
          design, while I think web app development is getting more interesting
          from time to time
        </p>

        <p className="text-denim-700 dark:text-denim-50">
          I found that the frontend area is always evolving and constantly
          changing, also we are living in the Information Age that many
          platforms or services have their web apps where visual and interaction
          design have a significant role to its users
        </p>

        <p className="text-denim-700 dark:text-denim-50">
          I combine ideas, creativity, and problem solving to achieve a great
          user experience. I enjoy spending my time to learn something new by
          reading books or articles, and sometimes I play video games too
        </p>
      </article>

      <ul className="dark[&_a:hover]:text-denim-300 mt-2 flex items-center space-x-4 text-denim-600 dark:text-denim-50 [&_a:hover]:text-ochre-500">
        {links.map(({ Icon, href, label }) => (
          <li key={label}>
            <AdaptiveLink href={href} rel="me">
              <Icon
                aria-hidden={true}
                aria-label={label}
                className="size-5 transition-colors"
              />
            </AdaptiveLink>
          </li>
        ))}
      </ul>

      <hr className="prose mt-4 w-full border border-denim-600 dark:border-denim-100" />

      <h4 className="mt-4 font-semibold tracking-tight md:text-2xl">
        My Career So Far
      </h4>

      <section className="flex w-full max-w-screen-sm flex-col gap-6">
        {careers.map((work, index) => {
          return (
            <div className="flex flex-col gap-2" key={index}>
              <h5 className="text-lg font-semibold md:text-xl">
                {work.company}
              </h5>
              <p className="font-medium text-denim-700 dark:text-denim-50">
                {work.title}, {work.date}
              </p>
              <p className="text-denim-700 dark:text-denim-50">
                {work.description}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
}
