export default function TodoCompleteList(props) {
	// declare variables
	const {todoCompleteList, handleMarkUndone, handleDeleteTodoComplete} = props

	return (
		<div className="w-screen flex flex-col p-8 gap-4 z-0 lg:px-16 xl:px-40">
			{todoCompleteList.map((todoComplete, todoCompleteIndex) => {
				return (
					<ul className="flex items-center justify-between gap-3 border-0 rounded-xl px-4 py-2 bg-stone-500 hover:bg-[var(--lightest-orange-color)]">
						<div className="flex-1 xl:text-lg">
							{todoComplete}
						</div>
						<div className="flex items-center justify-between gap-3">
							<div className="text-lg hover:cursor-pointer xl:text-xl">
								<i className="fa-solid fa-left-long" onClick={() => {
									handleMarkUndone(todoCompleteIndex)
								}}></i>
							</div>
							<div className="text-base hover:cursor-pointer xl:text-lg">
								<i className="fa-solid fa-trash" onClick={() => {
									handleDeleteTodoComplete(todoCompleteIndex)
								}}></i>
							</div>
						</div>
					</ul>
				)
			})}
		</div>
	)
}
