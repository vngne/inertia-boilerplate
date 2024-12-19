import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
// import Account from "@/components/dashboard/account";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpdateAccountInformation from "./partials/update-account-information-form";
// import CVForm from "@/components/cv/cv-form";
import { PageProps } from '@/types';
import DeleteUserForm from './partials/delete-user-form';
import UpdatePasswordForm from "./partials/update-password-form";

export default function Edit({ mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
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
                <div className="p-4">
                    <Alert variant="destructive" className="mb-4 min-w-fit">
                        <AlertDescription>Under Contructions</AlertDescription>
                    </Alert>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="cv">
                                Curriculum vitae
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <UpdateAccountInformation
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                            <UpdatePasswordForm/>
                            <DeleteUserForm/>

                        </TabsContent>
                        <TabsContent value="cv">{/* <CVForm/> */}</TabsContent>
                    </Tabs>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
