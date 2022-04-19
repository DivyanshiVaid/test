import React from "react";
import Button from "./Button";
import TaskList from "./TaskList";
import AddTasks from "./AddTasks";
import { useState } from "react";
import EditTask from "./EdiTask";
const Header = ({ onAdd }) => {
  const [showAddTask, setShoeAddtask] = useState(false);
  const [task, setTask] = useState([
    {
      id: 1,
      AddTask: " Task 1",
      day: "20-1-2020",
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);


  const addTask = (tasks) => {
    console.log(tasks);
    const id = Math.floor(Math.random() * 10) + 1;
    const newTask = { id, ...tasks };
    setTask([...task, newTask]);
  };

  const editTask=(e)=>{
    setTask({...task ,AddTask:e.target.value , day:e.target.day})
    console.log(task)
  }

  const deleteTask = (id) => {
    console.log("deleted");
    setTask(
      task.filter((el) => {
        return el.id !== id;
      })
    );
  };

  return (
    <div className="col-md-6  shadow-lg m-5 ">
      <div className="col ">
        <div className="navbar p-3">
          <h1>Task Tracker</h1>
          <Button
            onAdd={() => setShoeAddtask(!showAddTask)}
            show={showAddTask}
          />
        </div>
        {showAddTask && <AddTasks onAdd={addTask} />}
        {task.length > 0 ? (
          <TaskList task={task} onDelete={deleteTask} />
        ) : (
          <p className="ms-2">No tasks to show</p>
        )}
      </div>
      {/* <button onClick={editTask}>edit</button> */}
    </div>
  );
};
export default Header;
