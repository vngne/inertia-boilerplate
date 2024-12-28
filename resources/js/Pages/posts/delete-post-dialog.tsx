import { FormEventHandler } from "react"
import { useForm } from "@inertiajs/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Post } from "@/types"

interface DeletePostProps {
  post: Post | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DeletePostDialog({ post, open, onOpenChange }: DeletePostProps) {
  const { delete: destroy, processing, reset } = useForm()

  const DeletePost: FormEventHandler = (e) => {
    e.preventDefault()
    console.log("Deleting post:", post?.slug)

    destroy(route("posts.destroy", { post: post?.slug }), {
      onSuccess: () => {
        toast.success("Post deleted successfully")
        onOpenChange(false)
      },
      onFinish: () => reset(),
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={DeletePost}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the post.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={processing}
            >
              Cancel
            </Button>
            <Button type="submit" variant="destructive" disabled={processing}>
              Delete Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

