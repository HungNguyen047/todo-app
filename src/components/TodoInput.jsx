export default function TodoInput(props) {
	// declare variables
	const {todoItem, setTodoItem, handleAddTodo} = props

	return (
		<div>
			<input placeholder="Add/Edit todo ..." value={todoItem} onChange={(event) => {
				setTodoItem(event.target.value)
			}} />
			<button onClick={() => {
				handleAddTodo(todoItem)
				setTodoItem('')
			}}>
				Enter
			</button>
		</div>
	)
}
