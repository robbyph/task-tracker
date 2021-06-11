import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) 
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Buy phone',
        day: 'Feb 5th at 2:30',
        reminder: false,
    },
    {
        id: 2,
        text: 'Buy bananas',
        day: 'Feb 5th at 2:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Clean car',
        day: 'Feb 5th at 2:30',
        reminder: false,
    },
])

//Add Task

const addTask = (task) => {
  const id= Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}


// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}
  
  return (
    <div className="Container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
