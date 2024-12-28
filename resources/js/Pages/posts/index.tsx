import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import RootLayout from "@/layout";
import { Post } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import  DeletePostForm  from "./delete-post";

export default function Posts({ posts }: { posts: Post[] }) {
    const auth = usePage().props.auth;
    console.log(posts);

    return (
        <RootLayout>
            <Head title="Posts" />
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <div className="flex flex-row items-center justify-start gap-4">
                        All Post ({posts.length})
                        {auth.user && (
                            <Link href="/posts/create">
                                <Button>Create</Button>
                            </Link>
                        )}
                    </div>
                </h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <Link href={`/posts/${post.slug}`}>
                                <CardHeader>
                                    <CardTitle>{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="truncate text-muted-foreground text-nowrap">
                                        {post.content.slice(0, 30)}
                                    </p>
                                </CardContent>
                                </Link>
                                <CardFooter className="flex flex-col justify-end flex-grow">
                                    <div className="flex items-center justify-between gap-4 mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <CalendarIcon className="w-4 h-4 mr-1" />
                                            <span>
                                                {post.created_at
                                                    .split("T")[0]
                                                    .split("-")
                                                    .reverse()
                                                    .join("/")}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <Avatar className="w-6 h-6 me-2">
                                                <AvatarImage
                                                    src={post.user.image || ""}
                                                />
                                                <AvatarFallback>
                                                    {post.user.name
                                                        ?.slice(0, 2)
                                                        .toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span>{post.user.name}</span>
                                        </div>
                                    </div>
                                    <div>
                                        {auth.user?.id === post.user_id && (
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/posts/${post.slug}/edit`}
                                                >
                                                    <Button
                                                        variant="secondary"
                                                        className="w-full"
                                                    >
                                                        Edit
                                                    </Button>
                                                </Link>
                                                <DeletePostForm post={post.slug} />
                                            </div>
                                        )}
                                    </div>
                                </CardFooter>

                        </Card>
                    ))}
                </div>
            </div>
        </RootLayout>
    );
}
