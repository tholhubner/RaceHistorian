<?php

namespace App\Http\Controllers;

use App\Models\Track;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Tracks/Index', [
            'tracks' => Track::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tracks/Create' );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'trackLength' => 'required|numeric',
        ]);

        $track = new Track();
        $track->name = $request->name;
        $track->location = $request->location;
        $track->trackLength = $request->trackLength;

        $track->save();

        return redirect(route('tracks.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Track $track)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Track $track)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Track $track)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Track $track)
    {
        //
    }
}
