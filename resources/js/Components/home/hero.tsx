import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { FileCode2, Triangle } from "lucide-react";
import { Author } from "@/components/home/author";

export default function Hero() {
    return (
        <section className="container z-auto flex flex-col items-center gap-4 pt-6 pb-8 md:py-10">
            <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
                <h1 className="text-5xl/[1.1] font-extrabold md:text-5xl lg:text-6xl lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                    Fullstack Laravel Templates
                </h1>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                    This modern Full Stack{" "}
                    <Link
                        href="https://laravel.com/docs/11.x/frontend#inertia"
                        className="font-semibold text-red-500"
                    >
                        Laravel Inertia
                    </Link>{" "}
                    solution is open-source and reusable, enabling developers to
                    build web applications quickly and efficiently with{" "}
                    <Link
                        href="https://laravel.com/docs/11.x/eloquent-serialization#main-content"
                        className="font-semibold text-red-600 "
                    >
                        Eloquent ORM
                    </Link>
                    ,{" "}
                    <Link
                        href="https://laravel.com/docs/11.x/starter-kits#laravel-breeze"
                        className="font-semibold text-orange-400"
                    >
                        Laravel Brezze
                    </Link>
                    , and a responsive{" "}
                    <Link
                        href="https://ui.shadcn.com/"
                        className="font-semibold text-zinc-900"
                    >
                        Shadcn/UI{" "}
                    </Link>
                    interface.
                </p>
                <p className="max-w-[750px] text-md text-muted-foreground">
                    Powered by <Author />
                </p>
            </div>

            <div>
                <Button size="lg" className="bg-red-500 hover:bg-red-600">
                    <FileCode2 />
                    <Link href="https://github.com/ekovegeance/laravel-templates">
                        Get Started
                    </Link>
                </Button>
            </div>
        </section>
    );
}
