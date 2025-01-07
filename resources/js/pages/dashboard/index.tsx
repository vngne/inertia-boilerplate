import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { Head } from "@inertiajs/react";


export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Head title="Dashboard"/>
        <header className="flex items-center h-16 gap-2 shrink-0">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
          </div>
        </header>
        <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
          {/* <div className="grid gap-4 auto-rows-min md:grid-cols-3">
              <StatsCard
                title="Requests Features"
                value="?"
                description="requests for new features"
              />
              <StatsCard
                title="Total Posts"
                value={posts.length.toString()}
                description="+180.1% from last month"
              />
              <StatsCard
                title="Total Users"
                value={users.length.toString()}
                description="+5% from last month"
              />
            </div> */}
            <div className="grid gap-4 mt-8 auto-rows-min md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <RecentUsers /> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your overview content here</p>
                </CardContent>
              </Card>
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
