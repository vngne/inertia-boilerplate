import SubmitButton from "@/components/stocks/submit-button";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import GuestLayout from "@/layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <div className="flex items-center justify-center w-full h-screen px-4">
            <Head title="Email Verification" />
            <Card className="max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle>Email Verification</CardTitle>
                    <CardDescription>
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you? If you didn't receive the email, we
                        will gladly send you another.
                    </CardDescription>
                    {status === "verification-link-sent" && (
                        <Alert>
                            A new verification link has been sent to the email
                            address you provided during registration.
                        </Alert>
                    )}
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="flex items-center justify-between mt-4">
                            <SubmitButton
                                pending={processing}
                                submit="Resend Verification Email"
                                submitting="Resending..."
                            />
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <Button variant="secondary">Log Out</Button>

                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
