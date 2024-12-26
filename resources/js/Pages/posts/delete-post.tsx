import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { CircleCheck } from "lucide-react";

export function DeletePost({ post }: { post: string }) {

    console.log('log router',router)
    const [confirmingPostDeleteion, setConfirmingPostDeletion] =
        useState(false);

    const confirmPostDeletion = () => {
        setConfirmingPostDeletion(true);
    };

    const detelePost = () => {
        router.delete(`/posts/${post}`, {
            onSuccess: () => {
                closeModal();
                toast.message("Success", {
                    description: "Your post success deletion",
                    duration: 10000,
                    icon: <CircleCheck/>
                })
            }
        });
    };

    const closeModal = () => {
        setConfirmingPostDeletion(false);
    };

    return (
        <div>
            <Button variant="destructive" onClick={confirmPostDeletion}>
                Delete Post
            </Button>

            <Dialog open={confirmingPostDeleteion} onOpenChange={closeModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This permanently
                            delete your post
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="destructive" onClick={detelePost}>Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    );
}
