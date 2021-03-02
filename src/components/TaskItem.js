import React, {useState} from 'react'
import 'css/TaskItem.css'

const TaskItem = ({ id, task, complete, onUpdateTask }) => {

  console.log(`TaskItem()`)
  
  // Local variable (built from a prop)
  // let c = complete

  // State variable
  let [c, setComplete] = useState(complete)



  
  const handleChange = (event) => {
    console.log(`check`, event.currentTarget.checked)
    
    // c = !c
    setComplete(!c)
    
    //onUpdateTask(id, c)

    //this.complete = eleInput.checked
    //this.dispatchEvent(customCompleteEvent)
  }

  return (<li>
    <input type="checkbox" id={`task-${id}`} name={`task-${id}`} checked={c} onChange={handleChange} />
    <label for={`task-${id}`} className="task">{task}</label>
  </li>)
}

export default TaskItem