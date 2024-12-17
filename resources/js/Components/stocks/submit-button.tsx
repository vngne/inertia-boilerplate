import React from "react";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";

/**
 * Submit button component
 * @description A button component that shows a loading spinner when the form is submitting
 * @default
 * @example
 * ```tsx
 * import SubmitButton from "@/components/stocks/submit-button";
 * <SubmitButton submitting="Submitting..." submit="Submit" />
 * ```
 *
 */

export default function SubmitButton({
    submitting,
    submit,
    pending,
}: {
    submitting: React.ReactNode;
    submit: React.ReactNode;
    pending: boolean;
}) {
    return (
        <Button disabled={pending} type="submit" >
            {pending ? (
                <div className="flex items-center justify-center gap-2">
                    <Loading />
                    {submitting}
                </div>
            ) : (
                submit
            )}
        </Button>
    );
}
