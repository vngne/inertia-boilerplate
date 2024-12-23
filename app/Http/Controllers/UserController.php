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
            'users' => $users
        ]);
    }

    public function show(User $user)
    {
        return Inertia::render('users/show', [
            'user' => $user
        ]);
    }
}
