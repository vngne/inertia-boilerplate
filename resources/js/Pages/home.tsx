import { BackgroundGrid } from "@/components/home/background-grid";
import RootLayout from "@/layout";
import { Link } from "@inertiajs/react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Sparkle } from "lucide-react";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import CTA from "@/components/home/CTA";

export default function Home() {
    return (
        <RootLayout>
            <main>

                {/* <Link href="https://github.com/ekovegeance/Fullstack-Nextjs-Templates/discussions/5">
                    <Alert className="mx-auto mt-4 w-fit">
                        <Sparkle className="w-4 h4" />
                        <AlertTitle className="font-semibold text-orange-600">
                            Got an idea?
                        </AlertTitle>
                        <AlertDescription>
                            Let us know! Submit your feature requests
                        </AlertDescription>
                    </Alert>
                </Link> */}
                <Hero />
                <Features/>
                <CTA/>
            </main>
            <BackgroundGrid />
        </RootLayout>

    );
}
