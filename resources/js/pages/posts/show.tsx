import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";
import type { Post } from "@/types";
import RootLayout from "@/layout";
import { Head, Link } from "@inertiajs/react";

export default function Post({ post }: { post: Post }) {
    console.log("ini data dari post", post);
    return (
        <RootLayout>
            <Head title={post.title} />
            <article>
                <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
                <div className="flex items-center mb-6 space-x-4">
                    <div className="flex items-center text-muted-foreground">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span>
                            {post.created_at
                                .split("T")[0]
                                .split("-")
                                .reverse()
                                .join("/")}
                        </span>
                    </div>
                    <Link href={`/users/${post.user.username}`}>
                        <div className="relative flex items-center w-full h-12 rounded-lg text-muted-foreground hover:bg-zinc-50 hover:text-primary">
                            <div className="flex mx-4">
                            <Avatar className="w-6 h-6 me-2">
                                <AvatarImage
                                    src={post.user.image}
                                    alt={post.user.name}
                                />
                                <AvatarFallback>
                                    {post.user.name.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <p>{post.user.name}</p>
                            </div>

                        </div>
                    </Link>
                </div>
                {post.thumbnail && (
                    <img
                        src={`/storage/${post.thumbnail}`}
                        alt={post.title}
                        className="object-cover w-full mb-6 rounded-lg h-96"
                    />
                )}
                <div className="mb-12 prose prose-lg max-w-none">
                    {post.content}{" "}
                </div>
            </article>
        </RootLayout>
    );
}
