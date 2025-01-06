<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a post listing.
     */
    public function index()
    {
        $posts = Post::with('user')
            ->latest()
            ->paginate(9);

        return Inertia::render('posts/index', [
            'posts' => $posts,
        ]);
    }

    /**
     * Display a post listing for the authenticated user.
     */
    public function table()
    {
        $posts = Post::with('user')
            ->where('user_id', auth('web')->id())
            ->latest()
            // ->get();
            ->paginate(8);

        return Inertia::render('dashboard/posts', [
            'posts' => $posts,
        ]);
    }

    /**
     * Show the form for creating a new post.
     */
    public function create()
    {
        return Inertia::render('posts/post-form');
    }

    /**
     * Store a newly created post in storage.
     */
    public function store(PostRequest $request): RedirectResponse
    {

        $file = $request->file('thumbnail');
        $request->user()->posts()->create([
            ...$request->validated(),
            ...['thumbnail' => $file->store('images/posts', 'public')],
        ]);

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified post.
     */
    public function show(Post $post)
    {
        // Eager load the user relationship
        $post->load('user');

        // Render the show view
        return Inertia::render('posts/show', [
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing the specified post.
     */
    public function edit(Post $post)
    {
        // Check if the authenticated user is the owner of the post
        if ($post->user_id !== auth('web')->id()) {
            abort(403, 'Unauthorized');
        }

        return Inertia::render('posts/edit-post-form', [
            'postParams' => $post,
        ]);
    }

    /**
     * Update the specified post in storage.
     */
    public function update(PostRequest $request, Post $post): RedirectResponse
    {
        if ($request->hasFile('thumbnail')) {
           Storage::delete($post->thumbnail);
            $file = $request->file('thumbnail');
        } else {
            $file = $post->thumbnail;
        }

        $post->update([
            'title' => $request->title,
            'content' => $request->content,
            'thumbnail' => $file->store('images/posts', 'public'),
        ]);

        return redirect()->route('posts.index');
    }

    /**
     * Remove the specified post from storage.
     */
    public function destroy(Post $post)
    {
        // Check if the authenticated user is the owner of the post
        if ($post->user_id !== auth('web')->id()) {
            abort(403, 'Unauthorized');
        }

        // Delete file if it exists
        if ($post->thumbnail) {
            Storage::disk('public')->delete($post->thumbnail);
        }

        // Delete the post
        $post->delete();

        return redirect()->route('posts.index');
    }
}
