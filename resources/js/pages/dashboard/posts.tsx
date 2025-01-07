import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import TablePosts from "../posts/table-posts";
import { Post } from "@/types";
import { Button } from "@/components/ui/button";
import PostFormDialog from "../posts/post-from-dialog";

export default function DashboardPosts({ posts }: { posts: Post[] }) {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex items-center h-16 gap-2 shrink-0">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="h-4 mr-2"
                        />
                    </div>
                </header>
                <div className="flex justify-between mx-4">
                    <h1 className="text-xl font-semibold">Posts</h1>
                    {/* <AddPostDialog /> */}
                    <Button onClick={() => {setShowDeleteDialog(true)}}> Add Post</Button>
                    <PostFormDialog
                    // post={selectedPost}
                    open={showDeleteDialog}
                    onOpenChange={setShowDeleteDialog}
                />
                </div>
                <TablePosts posts={posts} />
            </SidebarInset>
        </SidebarProvider>
    );
}
