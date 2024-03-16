export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded border border-neutral-500 p-6 text-center">
        <h1 className="mb-4 text-3xl">Next.js + TypeScript + shadcn/ui</h1>
        <p className="my-4">
          Edit{' '}
          <code className="rounded border border-neutral-500 p-1 font-mono">
            src/app/page.tsx
          </code>{' '}
          for live updates.
        </p>
      </div>
    </div>
  );
}
