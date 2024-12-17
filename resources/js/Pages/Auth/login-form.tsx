import SubmitButton from "@/components/stocks/submit-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Head, Link, useForm } from "@inertiajs/react";
import { TriangleAlert } from "lucide-react";
import { FormEventHandler } from "react";

export default function LoginForm({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    return (
        <div className="flex items-center justify-center w-full h-screen px-4">
            <Head title="Login" />
            <Card className="max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        {errors.email ? (
                            <Alert variant="destructive" className="my-3">
                                <TriangleAlert />
                                <AlertTitle className="font-semibold">
                                    {errors.email}
                                </AlertTitle>
                                <AlertDescription>
                                    Account already use by other provider
                                </AlertDescription>
                            </Alert>
                        ) : null}
                        {errors.email && (
                            <Alert variant="destructive" className="my-3">
                                <TriangleAlert />
                                <AlertTitle className="font-semibold">
                                    Woops!
                                </AlertTitle>
                                <AlertDescription>
                                    {errors.email}
                                </AlertDescription>
                            </Alert>
                        )}
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <Label className="text-red-500">
                                        {errors.email}
                                    </Label>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="inline-block ml-auto text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <Label className="text-red-500">
                                        {errors.password}
                                    </Label>
                                )}
                            </div>
                            <SubmitButton
                                pending={processing}
                                submitting="Login..."
                                submit="Login"
                            />
                        </div>
                    </form>
                    <div className="grid gap-2 mt-4">
                        <p className="mx-2 text-sm text-center text-muted-foreground">
                            Or login with
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-center">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="underline">
                            Sign up with Credentials
                        </Link>
                    </div>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-center text-muted-foreground">
                        By continuing, you agree to our{" "}
                        <Link href="#" className="underline">
                            User Agreement
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
