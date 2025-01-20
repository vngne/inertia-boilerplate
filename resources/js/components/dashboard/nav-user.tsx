import {
    BadgeCheck,
    ChevronsUpDown,
    LayoutDashboard,
    LogOut,
    User,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { Link } from "@inertiajs/react";

export function NavUser({
    user,
}: {
    user: {
        id: string;
        username: string;
        name: string;
        email: string;
        image: string;
    };
}) {
    const { isMobile } = useSidebar();
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="w-8 h-8 rounded-lg">
                                <AvatarImage
                                    src={user?.image}
                                    alt={user?.name}
                                />
                                <AvatarFallback className="rounded-lg">
                                    {user?.name.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-sm leading-tight text-left">
                                <span className="font-semibold truncate">
                                    {user?.name}
                                </span>
                                <span className="text-xs truncate">
                                    {user?.email}
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="w-8 h-8 rounded-lg">
                                    <AvatarImage
                                        src={user?.image}
                                        alt={user?.name}
                                    />
                                    <AvatarFallback className="rounded-lg">
                                        {user?.name.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-sm leading-tight text-left">
                                    <span className="font-semibold truncate">
                                        {user?.name}
                                    </span>
                                    <span className="text-xs truncate">
                                        {user?.email}
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="w-full cursor-pointer">
                                <LayoutDashboard />
                                Dashboard
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="w-full cursor-pointer">
                                <Link href={`/users/${user?.username}`}>
                                <User />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="w-full cursor-pointer">
                                <Link href="/account">
                                <BadgeCheck />
                                Account
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className="w-full cursor-pointer text-destructive">
                            <Link href={route("logout")} method="post">
                                <LogOut />
                                Log Out
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
