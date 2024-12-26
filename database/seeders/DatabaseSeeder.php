<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'id' => 1,
            'name' => 'Eko Saputra',
            'username' => 'ekovegeance',
            'email' => 'me@ekovegeance.com',
            'role' => 'admin',
            'image' => 'https://avatars.githubusercontent.com/u/26839751?v=4',
            'password' => Hash::make('ekovegeance'),
        ]);
        // User::factory(10)->create();
        // Post::factory(20)->create();
        $users = User::factory(10)->create();
        Post::factory(20)->make()->each(function ($post) use ($users) {
            $post->user_id = $users->random()->id;
            $post->save();
        });

    }
}
