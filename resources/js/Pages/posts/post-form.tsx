import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/stocks/submit-button";
import RootLayout from "@/layout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import LabelError from "@/components/stocks/label-error";

export default function PostForm() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        thumbnail: null as File | null,
        content: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("posts.index"));
    };
    return (
        <RootLayout>
            <Head title="Create Post" />
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Create a New Blog Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="space-y-4" encType="multipart/form-data" noValidate>
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter your blog post title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                            />
                            <LabelError value={errors.title}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="thumbnail">Thumnail</Label>
                            <Input
                                className="h-20 border border-dashed focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                id="thumbnail"
                                name="thumbnail"
                                type="file"
                                onChange={(e) =>
                                    setData("thumbnail", e.target.files ? e.target.files[0] : null)
                                }
                            />
                            <LabelError value={errors.thumbnail}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="Write your blog post content here"
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                                required
                                className="min-h-[200px]"
                            />
                            <LabelError value={errors.content}/>
                        </div>
                        <div className="flex justify-between pt-4">
                            <SubmitButton
                                pending={processing}
                                submitting={"Submit Post..."}
                                submit={"Submit Post"}
                            />
                        </div>
                    </form>
                </CardContent>
            </Card>
        </RootLayout>
    );
}
