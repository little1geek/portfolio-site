import Link from "next/link";

const posts = [
  { id: "1", title: "Первый пост" },
  { id: "2", title: "Второй пост" },
  { id: "3", title: "Третий пост" },
];

export default function PostsPage() {
  return (
    <ul className="flex w-full flex-col gap-3">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/posts/${post.id}`}
            className="block rounded-xl border border-black/[.08] p-4 text-lg font-medium tracking-tight text-zinc-950 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.04]"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
