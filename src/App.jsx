import {useState} from 'react'
import TodoBackground from './components/TodoBackground'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoCompleteList from './components/TodoCompleteList'

function App() {
	// declare variables
	const [todoList, setTodoList] = useState([])
	const [todoItem, setTodoItem] = useState('')

	// declare functions
	function handleAddTodo(newTodoItem) {
		const newTodoList = [...todoList, newTodoItem]
		setTodoList(newTodoList)
	}
	
	function handleDeleteTodo(indexTobeDeleted) {
		const newTodoList = todoList.filter((todo, todoIndex) => {
			return (
				todoIndex !== indexTobeDeleted
			)
		})
		setTodoList(newTodoList)
	}

	function handleEditTodo(indexTobeEditted) {
		const itemTobeEditted = todoList[indexTobeEditted]
		setTodoItem(itemTobeEditted)
		handleDeleteTodo(indexTobeEditted)
	}

	return (
		<>
			<TodoBackground />
			<TodoInput todoItem={todoItem} setTodoItem={setTodoItem} handleAddTodo={handleAddTodo} />
			<TodoList todoList={todoList} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />
			<TodoCompleteList />
		</>
	)
}

export default App
