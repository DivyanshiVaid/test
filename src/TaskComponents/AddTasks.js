import React from "react";
import { useState } from "react";

const AddTasks = ({ onAdd }) => {
  const [AddTask, setAddTask] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!AddTask) {
      alert("Enter the task!");
      return;
    }

    onAdd({AddTask,day})
    setAddTask("")
    setDay("")
  };
  return (
    <div>
      <form className=" m-3" onSubmit={onSubmit}>
        <div>
          <label className="form-label">Tasks</label>
          <br />
          <input
            type="text"
            placeholder="Add Task"
            value={AddTask}
            onChange={(e) => setAddTask(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label className="form-label">Day & Time</label>
          <br />
          <input
            type="date"
            placeholder="Add Date & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          ></input>
        </div>
        <br />
        <input type="submit" value="save Task" />
      </form>
    </div>
  );
};

export default AddTasks;
