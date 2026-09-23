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
    <article className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {post?.title ?? "Пост не найден"}
      </h2>
      <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {post?.body}
      </p>
    </article>
  );
}
