<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home
Route::get('/', function () {
    return Inertia::render('home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'appName' => config('app.name'),
        'phpVersion' => PHP_VERSION,
    ]);
});

// Middleware Auth and Verified
Route::middleware(['auth', 'verified'])->group(function () {

    // Prefix Dashboard
    Route::group(['prefix' => 'dashboard'], function () {

        Route::get('/', function () {
            return Inertia::render('dashboard/index');
        })->name('dashboard');

        // Posts
        Route::get('/posts', [PostController::class, 'table'])->name('posts.table');

        // Account
        Route::get('/account', [AccountController::class, 'edit'])->name('account.edit');
        Route::patch('/account', [AccountController::class, 'update'])->name('account.update');
        Route::delete('/account', [AccountController::class, 'destroy'])->name('account.destroy');
    });

    // Posts
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post:slug}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::post('/posts{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{post:slug}', [PostController::class, 'destroy'])->name('posts.destroy');

});

// Users
Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::get('users/{user:username}', [UserController::class, 'show'])->name('users.show');

// Posts
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/{post:slug}', [PostController::class, 'show'])->name('posts.show');

require __DIR__.'/auth.php';
