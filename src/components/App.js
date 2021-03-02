import React from 'react'
import 'css/App.css'
import reactLogo from 'img/react.png'
import TaskList from 'components/TaskList'

const App = () => {
	// Go to the database/API and grab an Array of tasks!
	const todoList = [
		{
			"id": 1,
			"task": "Complete this example",
			"complete": false
		}, {
			"id": 2,
			"task": "Order groceries",
			"complete": true
		}, {
			"id": 3,
			"task": "Learn about Web Components",
			"complete": false
		}
	]

	const somethingHasChanged = (whichItem, isComplete) => {
		console.log(`Hurray!!! Item with id:${whichItem} has changed: ${isComplete}`)
		// Go update the database
		// React will update the UI (not yet, but soon)
	}


	// Pass the array to the list
	return (
		<>
			<h1>Tasks</h1>
			<TaskList tasks={todoList} onUpdateTask={somethingHasChanged} />
		</>
	)
}

export default App