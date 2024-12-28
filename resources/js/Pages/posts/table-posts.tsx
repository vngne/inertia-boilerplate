import { FormEventHandler, useState } from "react";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Eye, MoreHorizontal, Trash } from "lucide-react";
import { Link, useForm } from "@inertiajs/react";
import { Post } from "@/types";
import DefaultLayout from "@/layouts/default-layout";
import DeletePost from "./delete-post";
import { toast } from "sonner";

export default function PosTable({ posts }: { posts: Post[] }) {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

    const { delete: destroy, processing, reset, clearErrors } = useForm();

    const handleDelete = (post: Post) => {
        setSelectedPost(post);
        setShowDeleteDialog(true);
        setOpenDropdownId(null);
    };

    const handleDeleteConfirm: FormEventHandler = (e) => {
        e.preventDefault();
        console.log("Deleting post:", selectedPost?.slug);

        destroy(route("posts.destroy", { post: selectedPost?.slug }), {
            onSuccess: () => {
                toast.success("Post deleted successfully");
                setShowDeleteDialog(false);
                setSelectedPost(null);
            },
            onFinish: () => reset(),
        });
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
                                                    <Trash className="mr-2 h-4 w-4" />
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
                <Dialog
                    open={showDeleteDialog}
                    onOpenChange={setShowDeleteDialog}
                >
                    <DialogContent>
                        <form onSubmit={handleDeleteConfirm}>
                            <DialogHeader>
                                <DialogTitle>
                                    Are you absolutely sure?
                                </DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete the post.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setShowDeleteDialog(false)}
                                    disabled={processing}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="destructive"
                                    disabled={processing}
                                >
                                    Delete Post
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </DefaultLayout>
    );
}
