import {ReactNode} from "react";
import { cn } from "./lib/utils";
import { Navbar } from './components/home/navbar';
import Footer from './components/home/footer';
import { usePage } from "@inertiajs/react";

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            "bg-gradient-to-b from-white to-zinc-white dark:from-neutral-900 dark:to-neutral-800"
          )}
        >
          <div>
            <Navbar/>
            <main className="px-4 py-6 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />

          </div>
        </body>
      </html>
    )
}
