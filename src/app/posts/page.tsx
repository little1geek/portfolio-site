import Link from "next/link";

const posts = [
  { id: "1", title: "Первый пост" },
  { id: "2", title: "Второй пост" },
  { id: "3", title: "Третий пост" },
];

export default function PostsPage() {
  return (
    <ul className="flex flex-col gap-2">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/posts/${post.id}`}
            className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
