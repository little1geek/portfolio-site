export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <header className="w-full border-b border-black/[.08] pb-4 dark:border-white/[.145]">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Блог
          </h1>
        </header>
        {children}
      </main>
    </div>
  );
}
