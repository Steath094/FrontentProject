import { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import axios from "axios";
function usePrevious(value) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isCompleted,
  Completed: (task) => task.isCompleted,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState();
  
  const [filter, setFilter] = useState("All");

  function toggleTaskCompleted(id) {
    axios.patch(`/api/toggle/${id}`)
    .then((response)=>{
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    })
    .catch((err)=>{
      console.log("Error while toggling the completion ",err);
      
    })
    
  }

  function deleteTask(id) {
    axios.delete(`/api/${id}`)
    .then(()=>{
      const remainingTasks = tasks.filter((task) => id !== task._id);
      setTasks(remainingTasks);     
    })
    .catch((err)=>{
      console.log("Error while deleting tasks",err);
    })
  }

  function editTask(id, newName) {
    axios.patch(`/api/${id}`,{name :newName})
    .then((response)=>{
      const editedTaskList = tasks.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task._id) {
          // Copy the task and update its name
          return { ...task, name: newName };
        }
        // Return the original task if it's not the edited task
        return task;
      });
      setTasks(editedTaskList);
    })
    .catch((err)=>{
      console.log("Error While Updating task",err);
    })
    
  }

  const taskList = tasks
    ?.filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task._id}
        name={task.name}
        completed={task.isCompleted}
        key={task._id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    axios.post("/api",{name})
    .then((response)=>{
      const newtask = response.data.data;
      setTasks([...tasks, newtask]);
    })
    .catch((err)=>{
      console.log("Error While adding Todo", err);
      
    })
    
  }
 
  const tasksNoun = taskList?.length > 1 ? "tasks" : "task";
  const headingText = `${taskList?.length} ${tasksNoun} remaining`;

  const listHeadingRef = useRef(null);
  useEffect(()=>{
    axios.get("/api/")
    .then((response)=>{
      setTasks(response.data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[tasks?.length, taskList?.length])
  // useEffect(() => {
  //   if (tasks.length < prevTaskLength) {
  //     listHeadingRef.current.focus();
  //   }
  // }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
        role="list"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
