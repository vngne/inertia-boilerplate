"use client";

import * as React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Command, Menu, X } from "lucide-react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { NavUser } from "@/components/home/nav-user";
// import { usePathname } from "next/navigation";
import clsx from "clsx";
// import { useSession } from "next-auth/react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Users", href: "/users" },
    { name: "Posts", href: "/posts" },
    { name: "CRUD", href: "/crud" },
    { name: "contact", href: "/contact" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const auth = usePage().props.auth;
    const { url } = usePage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white/65 backdrop-blur border-border/40">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex items-center flex-shrink-0">
                            <Link
                                href="/"
                                className="text-xl font-bold text-gray-800"
                            >
                                <div className="flex items-center justify-center text-white bg-red-500 rounded-lg aspect-square size-8">
                                    <Command className="size-4" />
                                </div>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={clsx(
                                        "inline-flex items-center px-1 pt-1 text-sm font-medium text-zinc-500",
                                        url === link.href
                                            ? " text-zinc-900"
                                            : " text-zinc-500 hover:text-zinc-900"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {auth.user ? (
                            <NavUser
                                user={
                                    auth.user as unknown as {
                                        id: string;
                                        username: string;
                                        name: string;
                                        email: string;
                                        image: string;
                                    }
                                }
                            />
                        ) : (
                            <div className="flex items-center gap-2 px-4">
                                <Link href="/login">
                                    <Button
                                        variant="outline"
                                        className="justify-center w-full mr-2"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button className="justify-center w-full">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center -mr-2 sm:hidden">
                        <Button
                            variant="ghost"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X
                                    className="block w-6 h-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    className="block w-6 h-6"
                                    aria-hidden="true"
                                />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={clsx(
                                    "block pl-3 pr-4 py-2 text-base font-medium",
                                    url === link.href
                                        ? " text-zinc-900"
                                        : " text-zinc-500 hover:text-zinc-900"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 px-4">
                            {auth.user ? (
                                <div>
                                    <NavUser
                                        user={
                                            auth.user as unknown as {
                                                id: string;
                                                username: string;
                                                name: string;
                                                email: string;
                                                image: string;
                                            }
                                        }
                                    />
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {" "}
                                        <Button
                                            variant="outline"
                                            className="justify-center w-full mr-2"
                                        >
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {" "}
                                        <Button className="w-fÌull justify-center">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
