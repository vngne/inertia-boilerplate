import { useState, FormEventHandler } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { Post } from "@/types";

export default function DeletePost({ post,  }: { post: string }) {
    const [confirmingPostDeletion, setConfirmingPostDeletion] = useState(false);
    const [selectedPost, setSelectedPost] = useState<string | null>(null);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

    const { delete: destroy, processing, reset, clearErrors } = useForm();
    const confirmPostDeletion = (post: string) => {
        setSelectedPost(post);
        setConfirmingPostDeletion(true);
        setOpenDropdownId(null);
    };

    const deletePost: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("posts.destroy", { post: post }), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                toast.success("Post deleted successfully");
                 setSelectedPost(null);
                // onClose?.();
            },
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingPostDeletion(false);
        setOpenDropdownId(null);
        clearErrors();
        reset();
        // onClose?.();
    };

    return (
        <>
            <Button variant="destructive" onClick={() => {confirmPostDeletion(post)}}>
                Delete Post
            </Button>

            <Dialog open={confirmingPostDeletion} onOpenChange={setConfirmingPostDeletion}>
                <DialogContent>
                    <form onSubmit={deletePost}>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will
                                permanently delete the post.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={closeModal}
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
        </>
    );
}
