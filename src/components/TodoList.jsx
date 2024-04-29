export default function TodoList(props) {
	// declare variables
	const {todoList, handleMarkDone, handleEditTodo, handleDeleteTodo} = props

	return (
		<div className="w-screen flex flex-col p-8 gap-4 z-0 lg:px-16 xl:px-40">
			{todoList.map((todo, todoIndex) => {
				return (
					<ul className="flex items-center justify-between gap-3 border-0 rounded-xl px-4 py-2 bg-[var(--blue-color)] hover:bg-[var(--darker-blue-color)]">
						<div className="flex-1 xl:text-lg">
							{todo}
						</div>
						<div className="flex items-center justify-between gap-3">
							<div className="text-lg hover:cursor-pointer xl:text-xl">
								<i className="fa-solid fa-square-check" onClick={() => {
									handleMarkDone(todoIndex)
								}}></i>
							</div>
							<div className="text-lg hover:cursor-pointer xl:text-xl">
								<i className="fa-solid fa-square-pen" onClick={() => {
									handleEditTodo(todoIndex)
								}}></i>
							</div>
							<div className="text-base hover:cursor-pointer xl:text-lg">
								<i className="fa-solid fa-trash" onClick={() => {
									handleDeleteTodo(todoIndex)
								}}></i>
							</div>
						</div>
					</ul>
				)
			})}
		</div>
	)
}
