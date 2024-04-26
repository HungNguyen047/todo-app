export default function TodoCompleteList(props) {
	// declare variables
	const {todoCompleteList, handleMarkUndone, handleDeleteTodoComplete} = props

	return (
		<div>
			{todoCompleteList.map((todoComplete, todoCompleteIndex) => {
				return (
					<ul>
						{todoComplete}
						<div>
							<i class="fa-solid fa-left-long" onClick={() => {
								handleMarkUndone(todoCompleteIndex)
							}}></i>
							<i className="fa-solid fa-trash" onClick={() => {
								handleDeleteTodoComplete(todoCompleteIndex)
							}}></i>
						</div>
					</ul>
				)
			})}
		</div>
	)
}
