import React from "react"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import PageHeader from "@/Components/PageHeader"

const Index = ({ auth, teams }) => {
	return (
		<Authenticated
            user={auth.user}
            header={<PageHeader title="Teams" addUrl="/teams/create" />}
        >
			<Head title="Teams" />
			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    { teams.length ? (
                        teams.map(team =>
                            <div key={team.id}>
                                <p className="mt-4 text-lg text-gray-900">{team.name}</p>
                                <p className="mt-4 text-lg text-gray-900">{team.location}</p>
                            </div>
                        )
                    ) : (
                        <p className="mt-4 text-lg text-gray-900">No teams to show.</p>
                    )}
                </div>
			</div>
		</Authenticated>
	)
}

export default Index
