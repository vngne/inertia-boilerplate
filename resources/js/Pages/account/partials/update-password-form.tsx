import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";
import SubmitButton from "@/components/stocks/submit-button";
import { Transition } from "@headlessui/react";
import DefaultLayout from "@/layouts/default-layout";
import { toast } from "sonner";
import { CircleCheck } from "lucide-react";

export default function UpdatePasswordForm() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPassword = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.message("Success",{
                    description: "Your password success is being change",
                    duration: 10000,
                    icon: <CircleCheck/>
                })
            },

            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPassword.current?.focus();
                }
            },
        });
    };

    return (
        <DefaultLayout>
            <Head title="Account" />
            <div className="space-y-6 mt-4">
                <form onSubmit={submit} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Update Password</CardTitle>
                            <CardDescription>
                                Ensure your account is using a long, random
                                password to stay secure.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label htmlFor="current_password">
                                    Current Password
                                </Label>
                                <Input
                                    id="current_password"
                                    type="password"
                                    name="password"
                                    value={data.current_password}
                                    ref={currentPassword}
                                    onChange={(e) =>
                                        setData(
                                            "current_password",
                                            e.target.value
                                        )
                                    }
                                    required
                                    autoComplete="current_password"
                                />
                                {errors.current_password && (
                                    <Label className="text-sm text-destructive">
                                        {errors.current_password}
                                    </Label>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="password">New Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    ref={passwordInput}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    autoComplete="new-password"
                                />
                                {errors.password && (
                                    <Label className="text-sm text-destructive">
                                        {errors.password}
                                    </Label>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="password_confirmation">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    autoComplete="new-password"
                                />
                                {errors.password_confirmation && (
                                    <Label className="text-sm text-destructive">
                                        {errors.password_confirmation}
                                    </Label>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <SubmitButton
                                    pending={processing}
                                    submit="Save"
                                    submitting="Saving"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </DefaultLayout>
    );
}
