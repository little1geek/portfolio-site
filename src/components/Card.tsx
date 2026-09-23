export default function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-black/[.08] p-4 text-left dark:border-white/[.145]">
      <h2 className="text-lg font-semibold tracking-tight text-black dark:text-zinc-50">
        {title}
      </h2>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{text}</p>
    </div>
  );
}
