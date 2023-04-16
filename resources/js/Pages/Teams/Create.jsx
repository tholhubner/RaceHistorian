import React from "react"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import InputError from "@/Components/InputError"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm, Head } from "@inertiajs/react"
import TextInput from "@/Components/TextInput"
import PageHeader from "@/Components/PageHeader"

const Create = ({ auth }) => {
	const {
		data,
		setData,
		post,
		processing,
		reset,
		errors
	} = useForm({
		name: '',
        location: '',
        foundedYear: '',
        series: ''
	})

	const submit = (e) => {
		e.preventDefault()
        console.log(data)
		post(route("teams.store"), { onSuccess: () => reset() })
	}

	return (
		<Authenticated
            user={auth.user}
            header={<PageHeader title="Team Creation" />}
        >
			<Head title="Tracks" />
			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
				<form onSubmit={submit}>
					<TextInput
						value={data.name}
						placeholder="Team Name"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("name", e.target.value)}
					/>
                    <TextInput
						value={data.location}
						placeholder="Team HQ Location"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("location", e.target.value)}
					/>
                    <TextInput
						value={data.foundedYear}
						placeholder="Founded (Year)"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-5"
						onChange={e => setData("foundedYear", e.target.value)}
					/>
					<InputError
                        message={
                            errors.name && errors.name
                            || errors.location && errors.location
                            || errors.foundedYear && errors.foundedYear
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
