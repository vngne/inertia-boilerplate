import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "@/types";
import SubmitButton from "@/components/stocks/submit-button";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect } from "react";

interface EditPostFormDialogProps {
    post: Post | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EditPostFormDialog({
    post,
    open,
    onOpenChange,
}: EditPostFormDialogProps) {
    const { data, setData, put, processing, errors } = useForm({
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
    });

    useEffect(() => {
        if (post) {
            setData({
                title: post.title,
                slug: post.slug,
                content: post.content,
            });
        }
    }, [post]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("posts.update", { post: post?.id }), {
            data: {
                title: data.title,
                slug: data.slug,
                content: data.content,
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Edit Post</DialogTitle>
                        <DialogDescription>
                            Fill in the form below to edit the blog post.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter your blog post title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug</Label>
                            <Input
                                id="slug"
                                name="slug"
                                placeholder="Enter tags and press Enter"
                                value={data.slug}
                                onChange={(e) =>
                                    setData("slug", e.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="Write your blog post content here"
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                                required
                                className="min-h-[200px]"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <SubmitButton
                            pending={processing}
                            submitting={"Update Post..."}
                            submit={"Update Post"}
                        />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
