import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Eye, MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Post } from "@/types";
import DefaultLayout from "@/layouts/default-layout";
import { DeletePostDialog } from "@/components/posts/delete-post-dialog";

export default function PostTable({ posts }: { posts: Post[] }) {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

    const handleDelete = (post: Post) => {
        setSelectedPost(post);
        setShowDeleteDialog(true);
        setOpenDropdownId(null);
    };

    return (
        <DefaultLayout>
            <div className="py-10 mx-auto md:container">
                <div className="mx-4 border rounded-lg">
                    <Table className="p-6">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Slug</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.map((post) => (
                                <TableRow key={post.id}>
                                    <TableCell className="font-medium">
                                        {post.title}
                                    </TableCell>
                                    <TableCell>{post.slug}</TableCell>
                                    <TableCell>
                                        {post.created_at
                                            .split("T")[0]
                                            .split("-")
                                            .reverse()
                                            .join("/")}
                                    </TableCell>
                                    <TableCell>{post.user.name}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu
                                            open={openDropdownId === post.slug}
                                            onOpenChange={(open) => {
                                                setOpenDropdownId(
                                                    open ? post.slug : null
                                                );
                                            }}
                                        >
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="w-8 h-8 p-0"
                                                >
                                                    <span className="sr-only">
                                                        Open menu
                                                    </span>
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                    Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={`/posts/${post.slug}`}
                                                    >
                                                        <Eye className="w-4 h-4 mr-2" />{" "}
                                                        Show
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-destructive hover:text-destructive"
                                                    onClick={() =>
                                                        handleDelete(post)
                                                    }
                                                >
                                                    <Trash className="w-4 h-4 mr-2" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <DeletePostDialog
                    post={selectedPost}
                    open={showDeleteDialog}
                    onOpenChange={setShowDeleteDialog}
                />
            </div>
        </DefaultLayout>
    );
}
