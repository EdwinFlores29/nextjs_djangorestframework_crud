function FormTask(){
    return(
        <div className="bg-slate-200 p-7">
            <form action="">
                <h1 className="text-black font-bold">Añadir Tarea</h1>

                <label htmlFor="title"
                       className="text-xs text-black"
                >Title:</label>

                <input
                    type="text"
                    name="title"
                    className="bg-slate-400 rounded-b-md p-2 mb-2 block w-full text-slate-900"
                />
                <label htmlFor="title"
                       className="text-xs text-black"
                >Description:</label>
                <textarea
                    name="description"
                    className="bg-slate-400 rounded-b-md p-2 mb-2 block w-full text-slate-900"
                ></textarea>
                <button
                    className="bg-indigo-500 text-white rounded-md p-2 block w-full">Save</button>
            </form>
        </div>
    )
}

export default FormTask