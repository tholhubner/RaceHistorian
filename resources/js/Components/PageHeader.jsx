export default function PageHeader({ title, addUrl = "" })
{
    return (
        <div className="flex flex-row justify-between items-center">
            <h2 className="flex-start font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{title}</h2>
            { addUrl &&
                <button
                    className="btn btn-outline btn-xs flex-end text-md"
                    onClick={() => window.location.href = addUrl}
                >
                    + Add
                </button>
            }
        </div>
    )
}
