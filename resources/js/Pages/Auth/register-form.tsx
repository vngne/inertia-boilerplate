import RegisterSide from "@/components/auth/register-side";
import SubmitButton from "@/components/stocks/submit-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Head, Link, useForm } from "@inertiajs/react";
import { TriangleAlert } from "lucide-react";
import { FormEventHandler } from "react";

export default function RegisterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };
    return (
        <div>
            <Head title="Register" />
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-8 py-12 md:px-12">
                    <div className="w-full max-w-sm mx-auto space-y-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">
                                Create an account
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Enter your information to get started
                            </p>
                        </div>
                        <form onSubmit={submit}>
                            <div className="space-y-6">
                                {errors.email && (
                                    <Alert
                                        variant="destructive"
                                        className="my-3"
                                    >
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
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={data.name}
                                            autoComplete="name"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />
                                        {errors.name && (
                                            <Label className="text-red-500">
                                                {errors.name}
                                            </Label>
                                        )}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            value={data.email}
                                            autoComplete="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            required
                                        />
                                        {errors.email && (
                                            <Label className="text-red-500">
                                                {errors.email}
                                            </Label>
                                        )}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={data.password}
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        {errors.password && (
                                            <Label className="text-red-500">
                                                {errors.password}
                                            </Label>
                                        )}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="confirmPassword">
                                            Confirm Password
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            type="password"
                                            value={data.password_confirmation}
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        {errors.password_confirmation && (
                                            <Label className="text-red-500">
                                                {errors.password_confirmation}
                                            </Label>
                                        )}
                                    </div>
                                    <SubmitButton
                                        pending={processing}
                                        submitting={"Registering..."}
                                        submit={"Register"}
                                    />
                                    {/* <Button>Register</Button> */}
                                </div>
                            </div>
                        </form>
                        <div className="grid gap-2">
                            <p className="text-sm text-center text-muted-foreground">
                                Or Login With
                            </p>
                        </div>
                        <div className="mt-4 text-sm text-center">
                            Have an account?{" "}
                            <Link href="login" className="underline">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <RegisterSide />
            </div>
        </div>
    );
}
