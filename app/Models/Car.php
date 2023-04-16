<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Car extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'series',
        'drivetrain',
        'powerunit',
        'transmission',
        'horsepower',
        'torque',
        'weight',
    ];

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
