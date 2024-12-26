<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display the user's
     */
    public function index()
    {
        $users = User::query()
            ->latest()
            ->get();

        return Inertia::render('users/index', [
            'users' => $users,
        ]);
    }

    /**
     * Display the user's profile
     */
    public function show(User $user)
    {
        // Load the user's posts
        $user->load('posts');

        return Inertia::render('users/show', [
            'user' => $user,
        ]);
    }
}
