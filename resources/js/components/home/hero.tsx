import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { FileCode2, Triangle } from "lucide-react";
import { Author } from "@/components/home/author";

export default function Hero() {
    return (
        <section className="container z-auto flex flex-col items-center gap-4 pt-6 pb-8 md:py-10">
            <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
                <h1 className="text-5xl/[1.1] font-extrabold md:text-5xl lg:text-6xl lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-400">
                    Inertia Boilerplate
                </h1>
                <p className="max-w-[750px] text-lg text-zinc-950 sm:text-xl">
                    This modern Full Stack{" "}
                    <a
                        href="https://laravel.com/docs/11.x/frontend#inertia"
                        className="font-semibold text-primary"
                    >
                        Laravel Inertia (react typescript)
                    </a>{" "}
                    solution is open-source and reusable, enabling developers to
                    build web applications quickly and efficiently with{" "}
                    <a
                        href="https://laravel.com/docs/11.x/eloquent-serialization#main-content"
                        className="font-semibold text-red-600 "
                    >
                        Eloquent ORM
                    </a>
                    ,{" "}
                    <a
                        href="https://laravel.com/docs/11.x/starter-kits#laravel-breeze"
                        className="font-semibold text-orange-600"
                    >
                        Laravel Brezze
                    </a>
                    , and a responsive{" "}
                    <a
                        href="https://ui.shadcn.com/"
                        className="font-semibold text-zinc-900"
                    >
                        Shadcn/UI{" "}
                    </a>
                    interface.
                </p>
                <p className="max-w-[750px] text-md text-muted-foreground">
                    Powered by <Author />
                </p>
            </div>

            <div>
                <Button size="lg">
                    <FileCode2 />
                    <a href="https://github.com/ekovegeance/inertia-boilerplate">
                        Get Started
                    </a>
                </Button>
            </div>
        </section>
    );
}
