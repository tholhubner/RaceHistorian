<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Team;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Cars/Index', [
            'cars' => Car::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cars/Create', [
            'teams' => Team::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'drivetrain' => 'required|string|max:255',
            'powerunit' => 'required|string|max:255',
            'transmission' => 'required|string|max:255',
            'horsepower' => 'required|numeric',
            'torque' => 'required|numeric',
            'weight' => 'required|numeric',
        ]);

        $team = Team::find($request->team_id);
        $car = new Car();
        $car->name = $request->name;
        $car->drivetrain = $request->drivetrain;
        $car->powerunit = $request->powerunit;
        $car->transmission = $request->transmission;
        $car->horsepower = $request->horsepower;
        $car->torque = $request->torque;
        $car->weight = $request->weight;
        $car->series = $request->series;

        $team->cars()->save($car);

        return redirect(routes('cars.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Cars $cars)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cars $cars)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cars $cars)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cars $cars)
    {
        //
    }
}
