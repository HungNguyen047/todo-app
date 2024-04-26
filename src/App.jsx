import {useState} from 'react'
import TodoBackground from './components/TodoBackground'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoCompleteList from './components/TodoCompleteList'

function App() {
	// declare variables
	const [todoList, setTodoList] = useState([])
	const [todoItem, setTodoItem] = useState('')
	const [todoCompleteList, setTodoCompleteList] = useState([])

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
	
	function handleMarkDone(indexTobeMarkDone) {
		handleDeleteTodo(indexTobeMarkDone)
		const itemTobeMarkDone = todoList[indexTobeMarkDone]
		const newTodoCompleteList = [...todoCompleteList, itemTobeMarkDone]
		setTodoCompleteList(newTodoCompleteList)
	}

	function handleDeleteTodoComplete(indexTobeDeleted) {
		const newTodoCompleteList = todoCompleteList.filter((todoComplete, todoCompleteIndex) => {
			return (
				todoCompleteIndex !== indexTobeDeleted
			)
		})
		setTodoCompleteList(newTodoCompleteList)
	}

	function handleMarkUndone(indexTobeMarkUndone) {
		handleDeleteTodoComplete(indexTobeMarkUndone)
		const itemTobeMarkUndone = todoCompleteList[indexTobeMarkUndone]
		handleAddTodo(itemTobeMarkUndone)
	}

	return (
		<>
			<TodoBackground />
			<TodoInput todoItem={todoItem} setTodoItem={setTodoItem} handleAddTodo={handleAddTodo} />
			<TodoList todoList={todoList} handleMarkDone={handleMarkDone} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />
			<TodoCompleteList todoCompleteList={todoCompleteList} handleMarkUndone={handleMarkUndone} handleDeleteTodoComplete={handleDeleteTodoComplete} />
		</>
	)
}

export default App
