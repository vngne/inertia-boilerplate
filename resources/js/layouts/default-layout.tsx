import { ReactNode } from "react";
import { Toaster } from "sonner";
export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
            <Toaster closeButton />
        </div>
    );
}
