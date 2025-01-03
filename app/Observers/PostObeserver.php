<?php

namespace App\Observers;

use App\Models\Post;

class PostObeserver
{
    public function creating(Post $post)
    {
        $post->slug = str()->slug($post->title);
    }
}
