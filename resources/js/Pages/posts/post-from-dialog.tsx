import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/stocks/submit-button";
import { FormEventHandler } from "react";

interface PostDialogFormProps {
    // post: Post | null
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function PostFormDialog({
    open,
    onOpenChange,
}: PostDialogFormProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        slug: "",
        content: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("posts.index"));
    };


    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <form onSubmit={submit} method="POST">
                    <DialogHeader>
                        <DialogTitle>Create a new blog post</DialogTitle>
                        <DialogDescription>
                            Fill in the form below to create a new blog post.
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
                            // disabled={processing}
                        >
                            Cancel
                        </Button>
                        <SubmitButton
                            pending={processing}
                            submitting={"Submit Post..."}
                            submit={"Submit Post"}
                        />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
