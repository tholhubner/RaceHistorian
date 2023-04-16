import React from "react"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

const Index = ({ auth, cars }) => {
	return (
		<Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Cars</h2>}
        >
			<Head title="Cars" />
			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <button className="mt-4 text-gray-100" onClick={() => window.location.href = "/cars/create"}>Add Car</button>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    { cars.length ? (
                        cars.map(car =>
                            <div key={car.id}>
                                <p className="mt-4 text-lg text-gray-900">{car.name}</p>
                                <p className="mt-4 text-lg text-gray-900">{car.series}</p>
                            </div>
                        )
                    ) : (
                        <p className="mt-4 text-lg text-gray-900">No cars to show.</p>
                    )}
                </div>
			</div>
		</Authenticated>
	)
}

export default Index
