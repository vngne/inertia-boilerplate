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
import { FormEventHandler } from "react";
import SubmitButton from "@/components/stocks/submit-button";
import { Transition } from "@headlessui/react";
import DefaultLayout from "@/layouts/default-layout";
import { toast } from "sonner";
import { CircleCheck } from "lucide-react";

export default function UpdateAccountInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        toast.message("Saving...", {
            description: "Your profile information is being saved.",
            duration: 10000,
            icon: <CircleCheck/>
        });

        patch(route("account.update"));
    };

    return (
        <DefaultLayout>
            <Head title="Account"/>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold">Profile</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                </div>
                <form onSubmit={submit} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Information</CardTitle>
                            <CardDescription>
                                Enter your details below to update your profile.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label>Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                    autoComplete="name"
                                />
                                {errors.name && (
                                    <Label className="text-sm text-destructive">
                                        {errors.name}
                                    </Label>
                                )}
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    autoComplete="email"
                                />
                                {errors.email && (
                                    <Label className="text-sm text-destructive">
                                        {errors.email}
                                    </Label>
                                )}
                            </div>

                            {mustVerifyEmail &&
                                user.email_verified_at === null && (
                                    <div>
                                        <p className="mt-2 text-sm text-gray-800">
                                            Your email address is unverified.
                                            <Link
                                                href={route(
                                                    "verification.send"
                                                )}
                                                method="post"
                                                as="button"
                                                className="text-sm underline rounded-md text-zinc-600 hover:text-zinc-900 focus:outline-none"
                                            >
                                                Click here to re-send the
                                                verification email.
                                            </Link>
                                        </p>

                                        {status ===
                                            "verification-link-sent" && (
                                            <div className="mt-2 text-sm font-medium text-green-600">
                                                A new verification link has been
                                                sent to your email address.
                                            </div>
                                        )}
                                    </div>
                                )}
                            <div className="flex justify-end">
                                <SubmitButton
                                    pending={processing}
                                    submit="Save"
                                    submitting="Saving"
                                />
                            </div>
                            {/* <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition> */}
                        </CardContent>
                    </Card>
                </form>
            </div>
        </DefaultLayout>
    );
}
