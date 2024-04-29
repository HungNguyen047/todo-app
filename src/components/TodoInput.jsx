export default function TodoInput(props) {
	// declare variables
	const {todoItem, setTodoItem, handleAddTodo} = props

	return (
		<div className="w-screen flex flex-col items-center p-8 gap-4 font-bold z-0 md:flex-row md:py-24 md:text-xl lg:pt-24 lg:pb-16 lg:px-16 lg:text-2xl xl:px-40 xl:pt-40 xl:text-3xl 2xl:pt-56">
			<input className="w-full border-0 rounded-xl p-4 focus:bg-[var(--blue-color)] md:flex-1" placeholder="Add/Edit todo ..." value={todoItem} onChange={(event) => {
				setTodoItem(event.target.value)
			}} />
			<button className="w-full border-0 rounded-xl p-4 bg-[var(--orange-color)] active:bg-[var(--darker-orange-color)] hover:shadow-2xl md:w-24 lg:w-32 xl:w-40" onClick={() => {
				handleAddTodo(todoItem)
				setTodoItem('')
			}}>
				Enter
			</button>
		</div>
	)
}
