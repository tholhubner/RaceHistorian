import React from "react"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

const Index = ({ auth, drivers }) => {
	return (
		<Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Drivers</h2>}
        >
			<Head title="Drivers" />
			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <button className="mt-4 text-gray-100" onClick={() => window.location.href = "/drivers/create"}>Add Driver</button>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    { drivers.length ? (
                        drivers.map(driver =>
                            <div key={driver.id}>
                                <p className="mt-4 text-lg text-gray-900">{driver.name}</p>
                                <p className="mt-4 text-lg text-gray-900">{driver.age}</p>
                                <p className="mt-4 text-lg text-gray-900">{driver.country}</p>
                            </div>
                        )
                    ) : (
                        <p className="mt-4 text-lg text-gray-900">No drivers to show.</p>
                    )}
                </div>
			</div>
		</Authenticated>
	)
}

export default Index
