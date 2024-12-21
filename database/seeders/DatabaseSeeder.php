<?php

namespace Database\Seeders;

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
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Eko Saputra',
            'username' => 'ekovegeance',
            'email' => 'me@ekovegeance.com',
            'role' => 'admin',
            'image' => 'https://avatars.githubusercontent.com/u/26839751?v=4',
            'password' => Hash::make('ekovegeance'),
        ]);
    }
}
