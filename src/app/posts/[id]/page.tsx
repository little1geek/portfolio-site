const posts = [
  { id: "1", title: "Первый пост", body: "Текст первого поста" },
  { id: "2", title: "Второй пост", body: "Текст второго поста" },
  { id: "3", title: "Третий пост", body: "Текст третьего поста" },
];

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  return (
    <article className="flex w-full flex-col gap-3">
      <h2 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        {post?.title ?? "Пост не найден"}
      </h2>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {post?.body}
      </p>
    </article>
  );
}
