import {
    UserCog,
    ChevronsUpDown,
    LayoutDashboard,
    LogOut,
    User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import ResponsiveNavLink from "../ResponsiveNavLink";

export function NavUser({
    user,
}: {
    user: {
        id?: string;
        username?: string;
        name?: string;
        email?: string;
        image?: string;
    };
}) {
    const displayName = user?.name || "Anonymous";
    const displayEmail = user?.email || "No email";
    const displayImage = user?.image || "/placeholder.svg?height=32&width=32";

    return (
        <div>
            <div className=" sm:ml-6 sm:flex sm:items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="relative w-full h-12 rounded-lg"
                        >
                            <Avatar className="w-8 h-8 rounded-lg">
                                <AvatarImage
                                    src={displayImage}
                                    alt={displayName}
                                />
                                <AvatarFallback className="rounded-lg">
                                    {displayName.slice(0, 2).toUpperCase()}
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
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-56 ms-4"
                        align="end"
                        forceMount
                    >
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="w-8 h-8 rounded-lg">
                                    <AvatarImage
                                        src={displayImage}
                                        alt={displayName}
                                    />
                                    <AvatarFallback className="rounded-lg">
                                        {displayName.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-sm leading-tight text-left">
                                    <span className="font-semibold truncate">
                                        {displayName}
                                    </span>
                                    <span className="text-xs truncate">
                                        {displayEmail}
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LayoutDashboard />
                            <Link href="/dashboard">Dashboard</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer ">
                            <Link href={`users/${user.username}`}>
                                <User />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <UserCog />
                            <Link href="/dashboard/account">Account</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Link href={route("logout")} method="post">
                            <DropdownMenuItem>
                                <Button variant="ghost" className="text-red-600 hover:text-red-700 -ms-4">
                                    <LogOut />
                                    Logout
                                </Button>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
