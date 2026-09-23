export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <header className="border-b border-black/[.08] pb-4 dark:border-white/[.145]">
        <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Блог
        </h1>
      </header>
      {children}
    </div>
  );
}
