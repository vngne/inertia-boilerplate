<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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


    public function table()
    {
        $posts = Post::with('user')
            ->where('user_id', auth('web')->id())
            ->latest()
            // ->get();
            ->paginate(8);

        return Inertia::render('dashboard/posts', [
            'posts' => $posts
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
    public function store(Request $request): RedirectResponse
    {
        // Validate the request
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        // Create the post
        Post::create([
            'title' => $request->title,
            'slug' => $request->slug,
            'content' => $request->content,
            'user_id' => auth('web')->id(),
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
            'post' => $post,
        ]);
    }

    /**
     * Update the specified post in storage.
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        // Validate the request
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        // Update the post
        $post->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'content' => $request->content,
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

        // Delete the post
        $post->delete();

        return redirect()->route('posts.index');
    }
}
