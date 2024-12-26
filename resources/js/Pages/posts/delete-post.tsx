import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';

export function DeletePost({ slug }: { slug: string }) {
    const handleDelete = () => {
        if (confirm('Apakah Anda yakin ingin menghapus post ini?')) {
            router.delete(`/posts/${slug}`, {
                onSuccess: () => alert('Post berhasil dihapus'),
            });
        }
    };

    return (
        <Button variant="destructive" onClick={handleDelete} >
            Hapus Post
        </Button>
    );
}

