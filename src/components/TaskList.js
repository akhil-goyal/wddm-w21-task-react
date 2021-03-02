import React from 'react'
import 'css/TaskList.css'
import TaskItem from 'components/TaskItem'

const TaskList = ({ tasks, onUpdateTask }) => {

  let allTasksItems = tasks.map(({ id, task, complete }) => <TaskItem key={id} id={id} task={task} complete={complete} onUpdateTask={onUpdateTask} />)

  return (
    <ul className="tasks">
      {allTasksItems}
    </ul>
  )
}

export default TaskList