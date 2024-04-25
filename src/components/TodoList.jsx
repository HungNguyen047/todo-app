export default function TodoList(props) {
	// declare variables
	const {todoList, handleEditTodo, handleDeleteTodo} = props

	return (
		<div>
			{todoList.map((todo, todoIndex) => {
				return (
					<ul>
						{todo}
						<div>
							<i className="fa-solid fa-square-check"></i>
							<i className="fa-solid fa-square-pen" onClick={() => {
								handleEditTodo(todoIndex)
							}}></i>
							<i className="fa-solid fa-trash" onClick={() => {
								handleDeleteTodo(todoIndex)
							}}></i>
						</div>
					</ul>
				)
			})}
		</div>
	)
}
