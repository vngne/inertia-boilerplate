import { FormEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import SubmitButton from "@/components/stocks/submit-button";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <div className="flex items-center justify-center min-h-screen white">
            <Head title="Forgot Password"/>
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Forgot Password</CardTitle>
                    <CardDescription>
                        Enter your email to receive a password reset link.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        {errors.email && (
                            <div className="flex items-center space-x-2 text-sm text-red-500">
                                <AlertCircle size={20} />
                                <span>
                                    {errors.email}
                                </span>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <SubmitButton
                            pending={processing}
                            submitting="Sending"
                            submit="Send Reset Link"
                        />
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
