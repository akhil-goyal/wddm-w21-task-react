import React from 'react'
import 'css/TaskItem.css'

const TaskItem = ({ id, task, complete, onUpdateTask }) => {

  console.log(`TaskItem: constructor`)

  const handleChange = (event) => {
    console.log(`check`, event.currentTarget.checked)
    complete = !complete
    onUpdateTask(id, complete)

    //this.complete = eleInput.checked
    //this.dispatchEvent(customCompleteEvent)
  }

  return (<li>
    <input type="checkbox" id={`task-${id}`} name={`task-${id}`} checked={complete} onChange={handleChange} />
    <label for={`task-${id}`} className="task">{task}</label>
  </li>)
}

export default TaskItem