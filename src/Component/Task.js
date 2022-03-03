import { FaTimes } from "react-icons/fa"

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}  >
        <h1>{task.text} <FaTimes style={{ color: 'red' , corsor: 'pointer'}} onClick={() => onDelete(task.id)}/></h1>
        <p>{task.day}</p>
    </div>
  )
}

export default Task