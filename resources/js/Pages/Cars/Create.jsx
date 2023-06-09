import React from "react"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import InputError from "@/Components/InputError"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm, Head } from "@inertiajs/react"
import TextInput from "@/Components/TextInput"
import PageHeader from "@/Components/PageHeader"

const Create = ({ auth, teams }) => {
	const {
		data,
		setData,
		post,
		processing,
		reset,
		errors
	} = useForm({
		name: '',
        series: '',
        drivetrain: '',
        powerunit: '',
        transmission: '',
        horsepower: '',
        torque: '',
        weight: '',
        team_id: '',
	})

	const submit = (e) => {
		e.preventDefault()
		post(route("cars.store"), { onSuccess: () => reset() })
	}

	return (
		<Authenticated
            user={auth.user}
            header={<PageHeader title="Car Creation" />}
        >
			<Head title="Cars" />
			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
				<form onSubmit={submit}>
					<TextInput
						value={data.name}
						placeholder="Car Name"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("name", e.target.value)}
					/>
                    <TextInput
						value={data.series}
						placeholder="Series"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("series", e.target.value)}
					/>
                    <TextInput
						value={data.drivetrain}
						placeholder="Drivetrain Type"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("drivetrain", e.target.value)}
					/>
                    <TextInput
						value={data.powerunit}
						placeholder="Power Unit"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("powerunit", e.target.value)}
					/>
                    <TextInput
						value={data.transmission}
						placeholder="Transmission"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("transmission", e.target.value)}
					/>
                    <TextInput
						value={data.horsepower}
						placeholder="Horsepower"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("horsepower", e.target.value)}
					/>
                    <TextInput
						value={data.torque}
						placeholder="Torque"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("torque", e.target.value)}
					/>
                    <TextInput
						value={data.weight}
						placeholder="Weight"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("weight", e.target.value)}
					/>
                    <div className="w-full mb-2">
                        <select className="select w-full">
                            <option disabled selected>Team ownership</option>
                            {teams.length &&
                                teams.map(team => (
                                    <option
                                        key={team.id}
                                        onClick={() => {
                                            setData("team_id", team.id)
                                            setSelectedTeam(team.name)
                                        }}
                                        selected={data.team_id === team.id}
                                    >
                                        {team.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
					<InputError
                        message={
                            errors.name && errors.name
                            || errors.series && errors.series
                            || errors.drivetrain && errors.drivetrain
                            || errors.powerunit && errors.powerunit
                            || errors.transmission && errors.transmission
                            || errors.horsepower && errors.horsepower
                            || errors.torque && errors.torque
                            || errors.weight && errors.weight
                        }
                        className="mt-2"
                    />
					<PrimaryButton className="mt-4" disabled={processing}>Add</PrimaryButton>
				</form>
			</div>
		</Authenticated>
	)
}

export default Create
