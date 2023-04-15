import React from "react"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

const Index = ({ auth, tracks }) => {
	return (
		<Authenticated user={auth.user}>
			<Head title="Tracks" />
			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <button className="mt-4 text-gray-100" onClick={() => window.location.href = "/tracks/create"}>Add Track</button>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    { tracks.length ? (
                        tracks.map(track =>
                            <div key={track.id}>
                                <p className="mt-4 text-lg text-gray-900">{track.name}</p>
                                <p className="mt-4 text-lg text-gray-900">{track.location}</p>
                                <p className="mt-4 text-lg text-gray-900">{track.length}</p>
                            </div>
                        )
                    ) : (
                        <p className="mt-4 text-lg text-gray-900">No tracks to show.</p>
                    )}
                </div>
			</div>
		</Authenticated>
	)
}

export default Index
