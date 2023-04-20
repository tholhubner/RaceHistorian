<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@test.com',
            'password' => 'test123',
        ]);

        \App\Models\Team::factory()->create([
            'name' => 'Test Team 1',
            'location' => 'UK',
            'foundedYear' => 2010,
        ]);

        \App\Models\Track::factory()->create([
            'name' => 'Test Track',
            'location' => 'US',
            'trackLength' => 2.45,
        ]);
    }
}
