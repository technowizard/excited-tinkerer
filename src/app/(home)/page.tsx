export default function Home() {
  return (
    <section className="mx-auto mb-8 flex w-full max-w-4xl flex-col-reverse justify-center py-32 sm:flex-row">
      <div className="container">
        <h1 className="mb-1 mt-4 tracking-tight text-denim-600 dark:text-denim-50 md:mt-0">
          Muhammad Fadhil
        </h1>
        <div className="mb-4 text-sm font-medium text-denim-600 dark:text-denim-50 md:text-lg">
          Software Engineer specialized in frontend development
        </div>
        <p className="max-w-lg text-denim-600 dark:text-denim-50">
          I craft things for the web, strive to build a meaningful product that
          is performant with thoughtful user experience.
        </p>
      </div>
    </section>
  );
}
