import { useState } from "react";
import AddTask from "./Component/AddTask";
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";

function App() {

  const [showAddtask, setShowAddTask] = useState(false)
 
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'Food Shoppoing',
      day: 'Feb 6th at 1:30pm',
      reminder: false,
  },
  {
      id: 3,
      text: 'Metting At School',
      day: 'Feb 5th at 3:30pm',
      reminder: true,
  },
  ])


 

   //Adding Task from the form
   const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
   setTasks([...tasks, newTask ])
   console.log(task)
  }

  //toggle reminder
  const onToggle = (id) => {
   setTasks(
     tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task))
   )
  }

  //Delating task
  const onDelete = (id) => {
    setTasks( tasks.filter((task) => task.id !== id))
  }

 

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddtask)} showAdd={showAddtask}/>
     { showAddtask &&
     <AddTask onAdd={addTask}/>
     }
     { tasks.length > 0 ? 
     <Tasks tasks={tasks} onToggle={onToggle} onDelete={onDelete}/>
     : "there is no Tasks"
     }
    </div>
  );
}

export default App;
