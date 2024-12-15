import CTA from "@/components/home/cta";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import RootLayout from "@/layout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Home(props: PageProps) {
    console.log("props", props,);
    return (
        <RootLayout>
            <>
                <Head title="Welcome" />
                <div className="">
                    <img
                        id="background"
                        className="absolute -left-10  top-16 max-w-[877px]"
                        src="https://laravel.com/assets/img/welcome/background.svg"
                    />
                    <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                        <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                            <main>
                                <Hero />
                                <Features />
                                <CTA/>
                            </main>
                        </div>
                    </div>
                </div>
            </>
        </RootLayout>
    );
}
