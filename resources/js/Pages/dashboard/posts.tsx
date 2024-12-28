import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import TablePosts from "../posts/table-posts";
import { Post } from "@/types";
import { Button } from "@/components/ui/button";

export default function DashboardPosts({ posts }: { posts: Post[] }) {
    console.log("ini dashboard post", posts);
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
                    <Button> Add Post</Button>
                </div>
                <TablePosts posts={posts} />
            </SidebarInset>
        </SidebarProvider>
    );
}
