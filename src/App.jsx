import {useState, useEffect} from 'react'
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
	function persistData(newTodoList) {
		localStorage.setItem("todoList", JSON.stringify({todoList: newTodoList}))
	}

	function handleAddTodo(newTodoItem) {
		const newTodoList = [...todoList, newTodoItem]
		persistData(newTodoList)
		setTodoList(newTodoList)
	}
	
	function handleDeleteTodo(indexTobeDeleted) {
		const newTodoList = todoList.filter((todo, todoIndex) => {
			return (
				todoIndex !== indexTobeDeleted
			)
		})
		persistData(newTodoList)
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

	useEffect(() => {
		if (!localStorage) {
			return
		}

		let localTodoList = localStorage.getItem("todoList")
		if (!localTodoList) {
			return
		}

		console.log(localTodoList)
		localTodoList = JSON.parse(localTodoList).todoList
		setTodoList(localTodoList)
	}, [])

	return (
		<main className="flex flex-col items-center justify-center">
			<TodoBackground />
			<TodoInput todoItem={todoItem} setTodoItem={setTodoItem} handleAddTodo={handleAddTodo} />
			<TodoList todoList={todoList} handleMarkDone={handleMarkDone} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />
			<TodoCompleteList todoCompleteList={todoCompleteList} handleMarkUndone={handleMarkUndone} handleDeleteTodoComplete={handleDeleteTodoComplete} />
		</main>
	)
}

export default App
